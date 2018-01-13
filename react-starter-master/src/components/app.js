import React from "react"
import a from "assets/a.png"
import and from "assets/and.png"
import curly from "assets/curly_bracet.png"

class App extends React.Component {

  render() {
    return (
      <div>
        <ul className="grid-container">
          <li className="wide">
            <span className="text-container-1">
              <h1>Helvetica</h1>
              <p>DESIGNED BY<br />
              Max Miedinger 1957
              </p>
            </span>
          </li>
          <li className="wide tall a" style={{ backgroundImage: `url(${a})` }} />
          <li className="tall curly" style={{ backgroundImage: `url(${curly})` }} />
          <li className="and" style={{ backgroundImage: `url(${and})` }} />
          <li>
            <span className="text-container-1">
              <h4>USAGE</h4>
              <p>/ Apple’s iOS interface
              / NYC’s MTA & Chicago&apos;s
              Transit Authority signage /
              NASA Space Shuttle orbiter
              </p>
            </span>
          </li>
          <li>
            <span className="text-container-1">
              <h4>WIDTHS & WEIGHTS</h4>
              <p>/ 9 weights <br />
                / three widths (normal, condensed, extended) <br />
                / 51 fonts total
              </p>
            </span>
          </li>
          <li>
            <span className="text-container-1">
              <h4>STROKES</h4>
              <p>/ cut horizontally or vertically <br />
                / distinguishes Helvetica from dupes like Arial
              </p>
            </span>
          </li>
          <li>
            <span className="text-container-1">
              <h4>PUNCTUATION</h4>
              <p>/heavier punctuation marks than Helvetica
              </p>
            </span>
          </li>
          <li className="wide">
            <span className="text-container-1">
              <h1>“I don’t care what it says, as long as it’s
                in Helvetica“
              </h1>
            </span>
          </li>
          <li className="wide">
            <span className="text-container-1">
              <h1>ABCDEFGHIJK LMNOPQRSTU VWXYZ
              </h1>
            </span>
          </li>
          <li>
            <span className="text-container-1">
              <h4>HELVETICA - THE MOVIE</h4>
              <p>/ documentary by Gary Hustwit <br />
                / released for Helvetica&apos;s 50th birthday (2007)
              </p>
            </span>
          </li>
          <li className="tablet" />
        </ul>
      </div>
    )
  }

}

export default App
