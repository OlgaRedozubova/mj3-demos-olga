/*************************************************************************
 *
 *  mj3-mml2html-global.js
 *
 *  Uses MathJax v3 to convert a MathML expression to an HTML tree.
 *
 * ----------------------------------------------------------------------
 *
 *  Copyright (c) 2018 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import {MathML} from 'mathjax3/mathjax3/input/mathml.js';
import {CHTML} from 'mathjax3/mathjax3/output/chtml.js';
import {HTMLMathItem} from 'mathjax3/mathjax3/handlers/html/HTMLMathItem.js';
import {HTMLDocument} from 'mathjax3/mathjax3/handlers/html/HTMLDocument.js';
import {browserAdaptor} from 'mathjax3/mathjax3/adaptors/browserAdaptor.js';

//
//  Create the input and output jax
//
const mml = new MathML();
const chtml = new CHTML({
    fontURL: 'https://cdn.rawgit.com/mathjax/mathjax-v3/3.0.0-beta.3/mathjax2/css'
});

//
//  Make a new HTML Math Document for the browser document
//
const doc = new HTMLDocument(document, browserAdaptor(), {InputJax: mml, OutputJax: chtml});

//
//  The MathJax object
//
window.MathJax = {
    //
    //  Return the stylesheet DOM node
    //
    Stylesheet: function () {
        return chtml.styleSheet(doc);
    },

    //
    //  Typeset a MathML expression and return the HTML tree for it
    //
    Typeset: function (string, em = 16, ex = 8, cwidth = 80*16) {
        let math = new HTMLMathItem(string, mml);
        math.setMetrics(em, ex, cwidth, 100000, 1);
        math.compile(doc);
        math.typeset(doc);
        return math.typesetRoot;
    }
};
