import { useEffect, useState } from "react";
import { fetchOrders, fetchProducts, placeOrder, type Order } from "./api";
import { OrderHistory } from "./OrderHistory";
import { cartTotalCents, formatPrice, type CartItem } from "./price";

export function Cart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  // Load the catalog from the API (GET /products); every product starts at quantity 0.
  useEffect(() => {
    fetchProducts()
      .then((products) => setItems(products.map((p) => ({ ...p, quantity: 0 }))))
      .catch(() => setMessage("Couldn't load products."))
      .finally(() => setLoading(false));

    // Load past orders (GET /orders) at the same time.
    fetchOrders()
      .then(setOrders)
      .catch(() => setOrders([]));
  }, []);

  function changeQuantity(id: string, delta: number) {
    setMessage(null);
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item)),
    );
  }

  const selected = items.filter((item) => item.quantity > 0);

  // Send the order to the API (POST /orders). The server calculates the real total.
  async function checkout() {
    try {
      const order = await placeOrder(selected.map((item) => ({ productId: item.id, quantity: item.quantity })));
      setMessage(`Order placed! Total charged: ${formatPrice(order.totalCents)}`);
      setOrders((current) => [order, ...current]); // newest first, no need to refetch
      setItems((current) => current.map((item) => ({ ...item, quantity: 0 })));
    } catch {
      setMessage("Checkout failed. Please try again.");
    }
  }

  return (
    <main style={{ fontFamily: "system-ui", maxWidth: 420, margin: "2rem auto" }}>
      <h1>Shop Cart New Feature</h1>
      {loading && <p>Loading products…</p>}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => (
          <li key={item.id} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
            <span style={{ flex: 1 }}>
              {item.name} <small>{formatPrice(item.priceCents)}</small>
            </span>
            <button
              aria-label={`Remove one ${item.name}`}
              disabled={item.quantity === 0}
              onClick={() => changeQuantity(item.id, -1)}
            >
              −
            </button>
            <span aria-label={`${item.name} quantity`}>{item.quantity}</span>
            <button aria-label={`Add one ${item.name}`} onClick={() => changeQuantity(item.id, 1)}>
              +
            </button>
          </li>
        ))}
      </ul>
      <p>
        Total: <strong data-testid="total">{formatPrice(cartTotalCents(items))}</strong>
      </p>
      <button disabled={selected.length === 0} onClick={checkout}>
        Checkout
      </button>
      {message && <p role="status">{message}</p>}
      <OrderHistory orders={orders} />
    </main>
  );
}
