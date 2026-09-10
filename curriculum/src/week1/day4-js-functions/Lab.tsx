import DayNav from "../../components/DayNav";
import CodeBlock from "../../components/CodeBlock";

export default function Lab() {
  return (
    <div className="page lab-page">
      <title>Day 4 Lab</title>
      <DayNav day="day4-js-functions" current="lab" />

      <h1>Day 4 — Lab</h1>

      <div className="data-block">
        <span className="tag-starter">Starter</span>
        <CodeBlock code={`interface Show {
  title: string;
  network: string;
  imdbRating: number;
}

interface Package {
  name: string;
  networks: string[];
  price: number;
}

const shows: Show[] = [
  { title: "A Little Late With Lilly Singh", network: "NBC", imdbRating: 1.5 },
  { title: "American Gods", network: "STARZ", imdbRating: 7.7 },
  { title: "American Idol", network: "ABC", imdbRating: 4.1 },
  { title: "Below Deck", network: "Bravo", imdbRating: 7.3 },
  { title: "Big Little Lies", network: "HBO", imdbRating: 8.5 },
  { title: "black-ish", network: "ABC", imdbRating: 7.1 },
  { title: "Bunheads", network: "Freeform", imdbRating: 7.6 },
  { title: "Dexter", network: "Showtime", imdbRating: 8.6 },
  { title: "Everything's Gonna Be Okay", network: "Freeform", imdbRating: 7.3 },
  { title: "Mom", network: "CBS", imdbRating: 7.2 },
  { title: "Outlander", network: "STARZ", imdbRating: 8.4 },
  { title: "Rebel", network: "BET", imdbRating: 5.4 },
  { title: "Riverdale", network: "CW", imdbRating: 6.8 },
  { title: "Silicon Valley", network: "HBO", imdbRating: 8.5 },
  { title: "Southern Charm", network: "Bravo", imdbRating: 6.2 },
  { title: "SpongeBob SquarePants", network: "Nickelodeon", imdbRating: 8.2 },
  { title: "Rocket Power", network: "Nickelodeon", imdbRating: 6.2 },
  { title: "The Amazing Race", network: "CBS", imdbRating: 7.6 },
  { title: "The Fosters", network: "Freeform", imdbRating: 7.9 },
  { title: "Top Chef", network: "Bravo", imdbRating: 7.6 },
  { title: "Tyler Perry's The Oval", network: "BET", imdbRating: 4.0 },
  { title: "Zoey's Extraordinary Playlist", network: "NBC", imdbRating: 8.1 },
];

const packages: Package[] = [
  {
    name: "Basic",
    networks: ["CBS", "CW", "ABC", "NBC"],
    price: 9.9,
  },
  {
    name: "Gold",
    networks: [
      "CBS", "CW", "ABC", "NBC", "BET", "Freeform",
      "Nickelodeon", "Bravo", "HBO", "Showtime", "STARZ",
    ],
    price: 37.9,
  },
  {
    name: "Select",
    networks: ["CBS", "CW", "ABC", "NBC", "BET", "Freeform", "Nickelodeon", "Bravo"],
    price: 17.9,
  },
  {
    name: "Silver",
    networks: [
      "CBS", "CW", "ABC", "NBC", "BET", "Freeform",
      "Nickelodeon", "Bravo", "HBO", "Showtime",
    ],
    price: 27.9,
  },
];`} language="typescript" />
      </div>

      <div className="task challenge">
        <span className="task-num">1</span>
        <div className="task-body">
          <p>Average package price.</p>
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Write <code>getAveragePrice(packages)</code> — takes the array of packages, returns a number.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`getAveragePrice(packages) // 23.4`} language="typescript" />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">2</span>
        <div className="task-body">
          <p>What you can watch on each package.</p>
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Write <code>getShowsByPackage(packages, shows)</code> — returns an object where each key is a package name and each value is an array of the show titles available with it.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`getShowsByPackage(packages, shows)
// {
//   Basic: ["A Little Late With Lilly Singh", "American Idol", "black-ish",
//           "Mom", "Riverdale", "The Amazing Race", "Zoey's Extraordinary Playlist"],
//   Gold: [ ...all 22 titles... ],
//   Select: [ ... ],
//   Silver: [ ... ],
// }`} language="typescript" />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">3</span>
        <div className="task-body">
          <p>Cheapest way to watch one show.</p>
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Write <code>getCheapestPackage(showTitle)</code> — takes a show title, returns the name of the cheapest package that carries that show's network.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`getCheapestPackage("Dexter")        // "Silver"
getCheapestPackage("American Idol") // "Basic"
getCheapestPackage("Outlander")     // "Gold"`} language="typescript" />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">4</span>
        <div className="task-body">
          <p>Good shows on a given package.</p>
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Write <code>getShowsByRating(packageName, rating)</code> — takes a package name and a rating between 0 and 10, returns every show available with that package at that rating or higher.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`getShowsByRating("Basic", 7)
// ["black-ish", "Mom", "The Amazing Race", "Zoey's Extraordinary Playlist"]`} language="typescript" />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">5</span>
        <div className="task-body">
          <p>How many shows each network has.</p>
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Write <code>countShowsByNetwork(shows)</code> — returns an object where each key is a network and each value is how many shows it has.</li>
            <li>Write <code>getBusiestNetwork(shows)</code> — returns the name of the network with the most shows.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`countShowsByNetwork(shows)
// { NBC: 2, STARZ: 2, ABC: 2, Bravo: 3, HBO: 2, Freeform: 3,
//   Showtime: 1, CBS: 2, BET: 2, CW: 1, Nickelodeon: 2 }

getBusiestNetwork(shows) // Bravo and Freeform both have 3 — decide what yours returns on a tie`} language="typescript" />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">6</span>
        <div className="task-body">
          <p>Split an array into chunks.</p>
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Write <code>chunkArray(array, size)</code> — takes any array and a chunk size, returns an array of sub-arrays where each one holds at most that many items.</li>
            <li>Run it on the show titles with a size of 5.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`chunkArray([1,2,3,4,5,6,7,8,9,10,11,12,13], 5)
// [[1,2,3,4,5], [6,7,8,9,10], [11,12,13]]`} language="typescript" />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">7</span>
        <div className="task-body">
          <p>Closure: track package lookups without a global variable.</p>
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Write <code>createLookupTracker()</code> — returns an object with <code>lookup(packageName)</code> and <code>getCounts()</code>.</li>
            <li>Each call to <code>lookup</code> increments a count for that package name; <code>getCounts</code> returns the counts so far.</li>
            <li>The count data must only be reachable through the returned functions — no variable holding it outside the closure.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`const tracker = createLookupTracker();
tracker.lookup("Gold");
tracker.lookup("Gold");
tracker.lookup("Basic");
tracker.getCounts() // { Gold: 2, Basic: 1 }`} language="typescript" />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">8</span>
        <div className="task-body">
          <p>Callback: write your own iteration function.</p>
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Write <code>forEachPackage(packages, callback)</code> — calls <code>callback(pkg, index)</code> once per package. Don't call <code>.forEach()</code> under the hood — write the loop yourself.</li>
            <li>Use it to log every package's name and price.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`forEachPackage(packages, (pkg, i) => console.log(\`\${i}: \${pkg.name} — $\${pkg.price}\`));
// 0: Basic — $9.9
// 1: Gold — $37.9
// 2: Select — $17.9
// 3: Silver — $27.9`} language="typescript" />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">9</span>
        <div className="task-body">
          <p>Rest parameters: merge networks from any number of packages.</p>
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Write <code>mergeNetworks(...packageNames)</code> — looks each name up in <code>packages</code> and returns the deduplicated union of their <code>networks</code>.</li>
            <li>It should work for two package names or five — that's what the rest parameter buys you.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`mergeNetworks("Basic", "Select")
// ["CBS", "CW", "ABC", "NBC", "BET", "Freeform", "Nickelodeon", "Bravo"]`} language="typescript" />
        </div>
      </div>

      <div className="task challenge">
        <span className="task-num">10</span>
        <div className="task-body">
          <p>Sort: rank packages from cheapest to priciest.</p>
          <span className="tag-challenge">Challenge</span>
          <ul className="task-list">
            <li>Write <code>getPackagesSortedByPrice()</code> — returns package names ordered from cheapest to most expensive.</li>
            <li>Sort a copy of <code>packages</code> — the original array's order shouldn't change.</li>
          </ul>
          <span className="tag-expected">Expected</span>
          <CodeBlock code={`getPackagesSortedByPrice()
// ["Basic", "Select", "Silver", "Gold"]`} language="typescript" />
        </div>
      </div>



    </div>
  );
}
