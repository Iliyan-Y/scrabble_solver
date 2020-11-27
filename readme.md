## To run tests

```
npm install
npm test
```

<article class="markdown-body entry-content container-lg" itemprop="text">
  <h4>
    <a
      id="user-content-requirements"
      class="anchor"
      aria-hidden="true"
      href="#requirements"
      ><svg
        class="octicon octicon-link"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        height="16"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
        ></path></svg></a
    >Requirements
  </h4>
  <p>Given a word, compute the scrabble score for that word.</p>
  <h5>
    <a
      id="user-content-letter-values"
      class="anchor"
      aria-hidden="true"
      href="#letter-values"
      ><svg
        class="octicon octicon-link"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        height="16"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
        ></path></svg></a
    >Letter Values
  </h5>
  <p>You'll need these:</p>
  <table>
    <thead>
      <tr>
        <th>Letter</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>A, E, I, O, U, L, N, R, S, T</td>
        <td>1</td>
      </tr>
      <tr>
        <td>D, G</td>
        <td>2</td>
      </tr>
      <tr>
        <td>B, C, M, P</td>
        <td>3</td>
      </tr>
      <tr>
        <td>F, H, V, W, Y</td>
        <td>4</td>
      </tr>
      <tr>
        <td>K</td>
        <td>5</td>
      </tr>
      <tr>
        <td>J, X</td>
        <td>8</td>
      </tr>
      <tr>
        <td>Q, Z</td>
        <td>10</td>
      </tr>
    </tbody>
  </table>
  <p>Examples "cabbage" should be scored as worth 14 points:</p>
  <ul>
    <li>3 points for C</li>
    <li>1 point for A, twice</li>
    <li>3 points for B, twice</li>
    <li>2 points for G</li>
    <li>1 point for E</li>
  </ul>
  <p>And to total:</p>
  <p>3 + 2x1 + 2x3 + 2 + 1</p>
  <p>= 3 + 2 + 6 + 3</p>
  <p>= 14</p>
  <h4>
    <a
      id="user-content-acceptance-criteria"
      class="anchor"
      aria-hidden="true"
      href="#acceptance-criteria"
      ><svg
        class="octicon octicon-link"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        height="16"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
        ></path></svg></a
    >Acceptance Criteria
  </h4>
  <div class="highlight highlight-source-ruby">
    <pre><span class="pl-s1">scrabble</span> <span class="pl-c1">=</span> <span class="pl-v">Scrabble</span><span class="pl-kos">.</span><span class="pl-en">new</span><span class="pl-kos">(</span><span class="pl-s">''</span><span class="pl-kos">)</span>
<span class="pl-s1">scrabble</span><span class="pl-kos">.</span><span class="pl-en">score</span> <span class="pl-c"># =&gt; 0</span>

<span class="pl-s1">scrabble</span> <span class="pl-c1">=</span> <span class="pl-v">Scrabble</span><span class="pl-kos">.</span><span class="pl-en">new</span><span class="pl-kos">(</span><span class="pl-s">" <span class="pl-cce">\t</span><span class="pl-cce">\n</span>"</span><span class="pl-kos">)</span>
<span class="pl-s1">scrabble</span><span class="pl-kos">.</span><span class="pl-en">score</span> <span class="pl-c"># =&gt; 0</span>

<span class="pl-s1">scrabble</span> <span class="pl-c1">=</span> <span class="pl-v">Scrabble</span><span class="pl-kos">.</span><span class="pl-en">new</span><span class="pl-kos">(</span><span class="pl-c1">nil</span><span class="pl-kos">)</span>
<span class="pl-s1">scrabble</span><span class="pl-kos">.</span><span class="pl-en">score</span> <span class="pl-c"># =&gt; 0</span>

<span class="pl-s1">scrabble</span> <span class="pl-c1">=</span> <span class="pl-v">Scrabble</span><span class="pl-kos">.</span><span class="pl-en">new</span><span class="pl-kos">(</span><span class="pl-s">'a'</span><span class="pl-kos">)</span>
<span class="pl-s1">scrabble</span><span class="pl-kos">.</span><span class="pl-en">score</span> <span class="pl-c"># =&gt; 1</span>

<span class="pl-s1">scrabble</span> <span class="pl-c1">=</span> <span class="pl-v">Scrabble</span><span class="pl-kos">.</span><span class="pl-en">new</span><span class="pl-kos">(</span><span class="pl-s">'f'</span><span class="pl-kos">)</span>
<span class="pl-s1">scrabble</span><span class="pl-kos">.</span><span class="pl-en">score</span> <span class="pl-c"># =&gt; 4</span>

<span class="pl-s1">scrabble</span> <span class="pl-c1">=</span> <span class="pl-v">Scrabble</span><span class="pl-kos">.</span><span class="pl-en">new</span><span class="pl-kos">(</span><span class="pl-s">'street'</span><span class="pl-kos">)</span>
<span class="pl-s1">scrabble</span><span class="pl-kos">.</span><span class="pl-en">score</span> <span class="pl-c"># =&gt; 6</span>

<span class="pl-s1">scrabble</span> <span class="pl-c1">=</span> <span class="pl-v">Scrabble</span><span class="pl-kos">.</span><span class="pl-en">new</span><span class="pl-kos">(</span><span class="pl-s">'quirky'</span><span class="pl-kos">)</span>
<span class="pl-s1">scrabble</span><span class="pl-kos">.</span><span class="pl-en">score</span> <span class="pl-c"># =&gt; 22</span>

<span class="pl-s1">scrabble</span> <span class="pl-c1">=</span> <span class="pl-v">Scrabble</span><span class="pl-kos">.</span><span class="pl-en">new</span><span class="pl-kos">(</span><span class="pl-s">'OXYPHENBUTAZONE'</span><span class="pl-kos">)</span>
<span class="pl-s1">scrabble</span><span class="pl-kos">.</span><span class="pl-en">score</span> <span class="pl-c"># =&gt; 41</span></pre>

  </div>
</article>
