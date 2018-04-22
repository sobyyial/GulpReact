import React from 'react';





export default class Example extends React.Component {
    render() {
      return (
<div class="whatisgulp"style={{backgroundColor:'#3a3e64',padding:'90px'}} >
<div class="container-lrg"style={{paddingLeft:'5%',paddingRight:'5%'}}>
<div class="col-12">
<div class="editor-window"style={{backgroundColor:'#141414',padding:'0%',borderRadius:'5px',textAlign:'left'}}>
<div class="editor-menubar"style={{backgroundColor:'#e5e4e4',height:'50px',borderRadius:'5px',textAlign:'left'}}>
<span class="editor-button close" style={{backgroundColor:'red'}}></span>
<span class="editor-button minimize"></span>
<span class="editor-button maximize"style={{backgroundColor:'green'}}></span>
<span class="editor-filename"style={{fontSize:'22pt'}}>gulpfile.js</span>
</div>
<pre style={{padding:'2%'}}><code class="javascript hljs"style={{fontSize:'14pt',color:'#e5e4e4',fontFamily:'lucida console'}}>
<span style={{color:'#c39a4e'}} class="hljs-keyword">var</span> gulp = <span style={{color:'#7b5c44'}}class="hljs-built_in">require</span>(<span style={{color:'#828c5b'}}class="hljs-string">'gulp'</span>);<br/>
<span style={{color:'#c39a4e'}} class="hljs-keyword">var</span> pug = <span class="mobile-show">  </span><span style={{color:'#7b5c44'}}class="hljs-built_in">require</span>(<span style={{color:'#828c5b'}}class="hljs-string">'gulp-pug'</span>);<br/>
<span style={{color:'#c39a4e'}} class="hljs-keyword">var</span> less = <span class="mobile-show">  </span><span style={{color:'#7b5c44'}}class="hljs-built_in">require</span>(<span style={{color:'#828c5b'}} class="hljs-string">'gulp-less'</span>);<br/>
<span style={{color:'#c39a4e'}} class="hljs-keyword">var</span> minifyCSS = <span class="mobile-show">  </span><span style={{color:'#7b5c44'}}class="hljs-built_in">require</span>(<span style={{color:'#828c5b'}} class="hljs-string">'gulp-csso'</span>);<br/>
<span style={{color:'#c39a4e'}} class="hljs-keyword">var</span> concat = <span class="mobile-show">  </span><span style={{color:'#7b5c44'}}class="hljs-built_in">require</span>(<span style={{color:'#828c5b'}} class="hljs-string">'gulp-concat'</span>);<br/>
<span style={{color:'#c39a4e'}} class="hljs-keyword">var</span> sourcemaps = <span class="mobile-show">>  </span><span style={{color:'#7b5c44'}}class="hljs-built_in">require</span>(<span style={{color:'#828c5b'}} class="hljs-string">'gulp-sourcemaps'</span>);<br/>
<br/>
gulp.task(<span style={{color:'#828c5b'}}class="hljs-string">'html'</span>, <span class="hljs-function"><span style={{color:'#c39a4e'}} class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{  
 <span style={{color:'#c39a4e'}}class="hljs-keyword">return</span> }gulp.src( <span class="mobile-show"><br />  </span>   <span style={{color:'#828c5b'}}class="hljs-string">'client/templates/*.pug'</span><span class="mobile-show"><br />    </span>)
    .pipe(pug())<br/>
    .pipe(gulp.dest(<span class="mobile-show"></span><span style={{color:'#828c5b'}}class="hljs-string">'build/html'</span><span class="mobile-show">   </span>))<br/>
});<br/>
<br/>
gulp.task(<span style={{color:'#828c5b'}}class="hljs-string">'css'</span>, <span class="hljs-function"><span style={{color:'#c39a4e'}} class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{ 
<span style={{color:'#c39a4e'}}class="hljs-keyword">return</span> }gulp.src( <span class="mobile-show"><br />      </span><span style={{color:'#828c5b'}}class="hljs-string">'client/javascript/*.js'</span><span class="mobile-show">    </span>) <br/>
    .pipe(less())<br/>
    .pipe(minifyCSS())<br/>
    .pipe(gulp.dest(<span class="mobile-show">  </span><span style={{color:'#828c5b'}}class="hljs-string">'build/css'</span><span class="mobile-show">  </span>))  <br/>
});<br/>
<br/>
gulp.task(<span style={{color:'#828c5b'}}class="hljs-string">'js'</span>, <span class="hljs-function"><span style={{color:'#c39a4e'}}class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
<span style={{color:'#c39a4e'}}class="hljs-keyword">return</span> }gulp.src( <span class="mobile-show"><br />      </span><span style={{color:'#828c5b'}}class="hljs-string">'client/javascript/*.js'</span><span class="mobile-show">    </span>) <br/>
    .pipe(sourcemaps.init())<br/>
    .pipe(concat(<span class="mobile-show">      </span><span style={{color:'#828c5b'}}class="hljs-string">'app.min.js'</span><span class="mobile-show">    </span>))<br/>
    .pipe(sourcemaps.write())<br/>
    .pipe(gulp.dest(<span class="mobile-show">      </span><span style={{color:'#828c5b'}}class="hljs-string">'build/js'</span><span class="mobile-show"><br />    </span>))
});<br/>
<br/>
gulp.task(<span style={{color:'#828c5b'}}class="hljs-string">'default'</span>, <span class="mobile-show">  </span>[ <span style={{color:'#828c5b'}}class="hljs-string">'html'</span>, <span style={{color:'#828c5b'}}class="hljs-string">'css'</span>, <span class="hljs-string">'js'</span> ]<span class="mobile-show"></span>);
          </code></pre>
</div>
</div>
</div>
</div>
      );
    }
  }