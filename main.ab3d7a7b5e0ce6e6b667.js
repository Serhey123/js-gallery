(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"Dv/5":function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("1UZS"),t("Dv/5"),t("Anew"),t("JBxO"),t("FdtR");var l={searchQuery:"",page:1,fetchGallery:function(){var e=this;return fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q="+this.searchQuery+"&page="+this.page+"&per_page=12&key=31608339-0446588eb00af9daeb22c7801").then((function(e){return e.json()})).then((function(n){return e.page+=1,n}))},resetPage:function(){this.page=1},set query(e){this.searchQuery=e}},a=t("bxc5"),r=t.n(a),s={formRef:document.getElementById("search-form"),listRef:document.querySelector(".gallery"),loadMoreBtn:document.getElementById("loadmore-btn")};var o=function(e){var n=r()(e.hits);s.listRef.insertAdjacentHTML("beforeend",n)},i=(t("bzha"),t("mFSj"),t("QJ3N")),c=t("WSJ9");t("JauC");i.defaultModules.set(c,{}),i.defaults.styling="material",i.defaults.icons="material";var u=function(e){0===e.hits.length?Object(i.error)({text:"Nothing found."}):Object(i.success)({text:"We found "+e.total+" results"})},d=(t("PzF0"),t("dcBu"));var m=function(e){d.create('\n  <div class="modal-img-wrap">\n    <img src='+e.dataset.source+' class="modal-img" width=\''+e.naturalWidth+"' height='"+e.naturalHeight+'\'/>\n\t<p class="modal-text">'+e.alt+"</p>\n  </div>\n    ").show()};t("RtS0"),t("3dw1");l.fetchGallery().then(o),s.formRef.addEventListener("submit",(function(e){e.preventDefault(),l.query=e.currentTarget.elements.query.value,s.listRef.innerHTML="",l.resetPage(),s.loadMoreBtn.classList.add("is-hidden"),l.fetchGallery().then((function(e){return e.hits.length>11&&s.loadMoreBtn.classList.remove("is-hidden"),o(e),e})).then(u)})),s.loadMoreBtn.addEventListener("click",(function(){l.fetchGallery().then((function(e){e.hits.length<12&&s.loadMoreBtn.classList.add("is-hidden"),o(e)}))})),s.loadMoreBtn.scrollIntoView({behavior:"smooth",block:"end"}),s.listRef.addEventListener("click",(function(e){var n=e.target.previousElementSibling;console.dir(n),n&&"IMG"===n.nodeName&&m(n)}))},bxc5:function(e,n,t){var l=t("mp5j");e.exports=(l.default||l).template({1:function(e,n,t,l,a){var r,s=null!=n?n:e.nullContext||{},o=e.hooks.helperMissing,i="function",c=e.escapeExpression,u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li class="gallery-item">\r\n <div class="photo-card">\r\n  <div class="gallery-img-wrapper">\r\n    <img src='+c(typeof(r=null!=(r=u(t,"webformatURL")||(null!=n?u(n,"webformatURL"):n))?r:o)===i?r.call(s,{name:"webformatURL",hash:{},data:a,loc:{start:{line:6,column:13},end:{line:6,column:29}}}):r)+" alt='"+c(typeof(r=null!=(r=u(t,"tags")||(null!=n?u(n,"tags"):n))?r:o)===i?r.call(s,{name:"tags",hash:{},data:a,loc:{start:{line:6,column:35},end:{line:6,column:43}}}):r)+"' data-source=\""+c(typeof(r=null!=(r=u(t,"largeImageURL")||(null!=n?u(n,"largeImageURL"):n))?r:o)===i?r.call(s,{name:"largeImageURL",hash:{},data:a,loc:{start:{line:6,column:58},end:{line:6,column:75}}}):r)+'" width="260px" height="190px" class="gallery-img"/>\r\n    <div class="overlay">\r\n      <p class="stats-item overlay-stats-item">\r\n        <i class="material-icons">visibility</i>\r\n        '+c(typeof(r=null!=(r=u(t,"views")||(null!=n?u(n,"views"):n))?r:o)===i?r.call(s,{name:"views",hash:{},data:a,loc:{start:{line:10,column:8},end:{line:10,column:17}}}):r)+'\r\n      </p>\r\n      <p class="stats-item overlay-stats-item">\r\n        <i class="material-icons">cloud_download</i>\r\n        '+c(typeof(r=null!=(r=u(t,"downloads")||(null!=n?u(n,"downloads"):n))?r:o)===i?r.call(s,{name:"downloads",hash:{},data:a,loc:{start:{line:14,column:8},end:{line:14,column:21}}}):r)+'\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class="stats">\r\n    <p class="stats-item">\r\n      <i class="material-icons">thumb_up</i>\r\n      '+c(typeof(r=null!=(r=u(t,"likes")||(null!=n?u(n,"likes"):n))?r:o)===i?r.call(s,{name:"likes",hash:{},data:a,loc:{start:{line:21,column:6},end:{line:21,column:15}}}):r)+'\r\n    </p>\r\n    <p class="stats-item">\r\n      <i class="material-icons">comment</i>\r\n      '+c(typeof(r=null!=(r=u(t,"comments")||(null!=n?u(n,"comments"):n))?r:o)===i?r.call(s,{name:"comments",hash:{},data:a,loc:{start:{line:25,column:6},end:{line:25,column:18}}}):r)+"\r\n    </p>\r\n  </div>\r\n </div>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,l,a){var r;return"\r\n"+(null!=(r=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:2,column:0},end:{line:30,column:9}}}))?r:"")},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.ab3d7a7b5e0ce6e6b667.js.map