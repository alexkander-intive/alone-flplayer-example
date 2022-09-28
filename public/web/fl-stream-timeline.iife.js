/*! ******************************************************************************* 
   Package Name: fl-stream-timeline
   Generated: 2022-08-24
   Version: 7.0.56

   Copyright (C) Firstlight Media. All rights reserved.  
   
   All information contained herein is, and remains the property of Firstlight Media. 
   The intellectual and technical concepts contained herein are proprietary to 
   Firstlight Media.  

   Dissemination of this information or reproduction of this material is strictly 
   forbidden unless prior written permission is obtained from Firstlight Media.  
   ******************************************************************************* */
var flStreamTimeline=function(t,e,n){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function i(t,e,n,i){return new(n||(n=Promise))((function(s,r){function o(t){try{h(i.next(t))}catch(t){r(t)}}function a(t){try{h(i.throw(t))}catch(t){r(t)}}function h(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}h((i=i.apply(t,e||[])).next())}))}function s(t,e){var n,i,s,r,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(s=2&r[0]?i.return:r[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,r[1])).done)return s;switch(i=0,s&&(r=[2&r[0],s.value]),r[0]){case 0:case 1:s=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,i=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!(s=o.trys,(s=s.length>0&&s[s.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!s||r[1]>s[0]&&r[1]<s[3])){o.label=r[1];break}if(6===r[0]&&o.label<s[1]){o.label=s[1],s=r;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(r);break}s[2]&&o.ops.pop(),o.trys.pop();continue}r=e.call(t,o)}catch(t){r=[6,t],i=0}finally{n=s=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}}var r,o=function(){function t(t,n,i){this.streamMetadataConfiguration=t,this.eventStore=n,this.isSubscribed=!1,this.logger_=i||e.createLogger(e.LoggerLevel.OFF,"FL_STREAM_TIMELINE")}return Object.defineProperty(t.prototype,"configuration",{get:function(){return this.streamMetadataConfiguration},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"gameInfo",{get:function(){return this.eventStore.gameInfo},enumerable:!1,configurable:!0}),t.prototype.subscribeToEventStore=function(){return i(this,void 0,void 0,(function(){var t;return s(this,(function(e){switch(e.label){case 0:return this.isSubscribed=!0,[4,this.eventStore.subscribeToGameMetadata(this.streamMetadataConfiguration.leagueName,this.streamMetadataConfiguration.gameId)];case 1:return void 0!==(t=e.sent())?[2,t]:[2,this.eventStore.subscribeToEvents(this.streamMetadataConfiguration.leagueName,this.streamMetadataConfiguration.gameId,"plays")]}}))}))},t.prototype.setup=function(){return this.isSubscribed?(this.logger_.warn("StreamTimelineManager is already setup. Ignoring duplicate setup."),Promise.resolve(void 0)):this.subscribeToEventStore()},t.prototype.exists=function(){return this.eventStore.exists(this.streamMetadataConfiguration.leagueName,this.streamMetadataConfiguration.gameId)},t.prototype.shutdown=function(){this.eventStore&&(this.eventStore.unsubscribeFromGameMetadata(),this.eventStore.unsubscribeFromEvents(),this.isSubscribed=!1)},t.prototype.updatePlayer=function(t){this.eventStore.updatePlayer(t)},t}();t.ChangeType=void 0,(r=t.ChangeType||(t.ChangeType={})).ADDED="added",r.MODIFIED="modified",r.DELETED="deleted",r.UNKNOWN="unknown";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class a{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function h(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class c extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,c.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,u.prototype.create)}}class u{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],r=s?function(t,e){return t.replace(l,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new c(i,o,n)}}const l=/\{\$([^}]+)}/g;function d(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const n=t[s],r=e[s];if(f(n)&&f(r)){if(!d(n,r))return!1}else if(n!==r)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function f(t){return null!==t&&"object"==typeof t}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function p(t){return t&&t._delegate?t._delegate:t}class g{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const m="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class y{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new a;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t))try{this.getOrInitializeService({instanceIdentifier:m})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===m?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:m:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class v{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new y(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var w;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(w||(w={}));const E={debug:w.DEBUG,verbose:w.VERBOSE,info:w.INFO,warn:w.WARN,error:w.ERROR,silent:w.SILENT},b=w.INFO,T={[w.DEBUG]:"log",[w.VERBOSE]:"log",[w.INFO]:"info",[w.WARN]:"warn",[w.ERROR]:"error"},I=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),s=T[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${i}]  ${t.name}:`,...n)};class S{constructor(t){this.name=t,this._logLevel=b,this._logHandler=I,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in w))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?E[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,w.DEBUG,...t),this._logHandler(this,w.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,w.VERBOSE,...t),this._logHandler(this,w.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,w.INFO,...t),this._logHandler(this,w.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,w.WARN,...t),this._logHandler(this,w.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,w.ERROR,...t),this._logHandler(this,w.ERROR,...t)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class A{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const C="@firebase/app",D="0.7.11",N=new S("@firebase/app"),_="[DEFAULT]",k={[C]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},R=new Map,L=new Map;function O(t,e){try{t.container.addComponent(e)}catch(n){N.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function M(t){const e=t.name;if(L.has(e))return N.debug(`There were multiple attempts to register component ${e}.`),!1;L.set(e,t);for(const e of R.values())O(e,t);return!0}function F(t,e){return t.container.getProvider(e)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const x=new u("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class P{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new g("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw x.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function U(t,e,n){var i;let s=null!==(i=k[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${s}" with version "${e}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void N.warn(t.join(" "))}M(new g(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var V;V="",M(new g("platform-logger",(t=>new A(t)),"PRIVATE")),U(C,D,V),U(C,D,"esm2017"),U("fire-js","");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
U("firebase","9.6.1","app");var q,B="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},j=j||{},H=B||self;function z(){}function $(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function G(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var K="closure_uid_"+(1e9*Math.random()>>>0),W=0;function Q(t,e,n){return t.call.apply(t.bind,arguments)}function Y(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function X(t,e,n){return(X=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Q:Y).apply(null,arguments)}function J(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Z(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}function tt(){this.s=this.s,this.o=this.o}var et={};tt.prototype.s=!1,tt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,K)&&t[K]||(t[K]=++W)}(this);delete et[t]}},tt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const nt=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},it=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s="string"==typeof t?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function st(t){return Array.prototype.concat.apply([],arguments)}function rt(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function ot(t){return/^[\s\xa0]*$/.test(t)}var at,ht=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ct(t,e){return-1!=t.indexOf(e)}function ut(t,e){return t<e?-1:t>e?1:0}t:{var lt=H.navigator;if(lt){var dt=lt.userAgent;if(dt){at=dt;break t}}at=""}function ft(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function pt(t){const e={};for(const n in t)e[n]=t[n];return e}var gt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mt(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<gt.length;e++)n=gt[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function yt(t){return yt[" "](t),t}yt[" "]=z;var vt,wt,Et=ct(at,"Opera"),bt=ct(at,"Trident")||ct(at,"MSIE"),Tt=ct(at,"Edge"),It=Tt||bt,St=ct(at,"Gecko")&&!(ct(at.toLowerCase(),"webkit")&&!ct(at,"Edge"))&&!(ct(at,"Trident")||ct(at,"MSIE"))&&!ct(at,"Edge"),At=ct(at.toLowerCase(),"webkit")&&!ct(at,"Edge");function Ct(){var t=H.document;return t?t.documentMode:void 0}t:{var Dt="",Nt=(wt=at,St?/rv:([^\);]+)(\)|;)/.exec(wt):Tt?/Edge\/([\d\.]+)/.exec(wt):bt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(wt):At?/WebKit\/(\S+)/.exec(wt):Et?/(?:Version)[ \/]?(\S+)/.exec(wt):void 0);if(Nt&&(Dt=Nt?Nt[1]:""),bt){var _t=Ct();if(null!=_t&&_t>parseFloat(Dt)){vt=String(_t);break t}}vt=Dt}var kt,Rt={};function Lt(){return function(t){var e=Rt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=ht(String(vt)).split("."),n=ht("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=ut(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||ut(0==s[2].length,0==r[2].length)||ut(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}))}if(H.document&&bt){var Ot=Ct();kt=Ot||(parseInt(vt,10)||void 0)}else kt=void 0;var Mt=kt,Ft=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",z,e),H.removeEventListener("test",z,e)}catch(t){}return t}();function xt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Pt(t,e){if(xt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(St){t:{try{yt(e.nodeName);var s=!0;break t}catch(t){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Ut[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Pt.Z.h.call(this)}}xt.prototype.h=function(){this.defaultPrevented=!0},Z(Pt,xt);var Ut={2:"touch",3:"pen",4:"mouse"};Pt.prototype.h=function(){Pt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Vt="closure_listenable_"+(1e6*Math.random()|0),qt=0;function Bt(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++qt,this.ca=this.fa=!1}function jt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ht(t){this.src=t,this.g={},this.h=0}function zt(t,e){var n=e.type;if(n in t.g){var i,s=t.g[n],r=nt(s,e);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(jt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function $t(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}Ht.prototype.add=function(t,e,n,i,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=$t(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new Bt(e,this.src,r,!!i,s)).fa=n,t.push(e)),e};var Gt="closure_lm_"+(1e6*Math.random()|0),Kt={};function Wt(t,e,n,i,s){if(i&&i.once)return Yt(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Wt(t,e[r],n,i,s);return null}return n=ie(n),t&&t[Vt]?t.N(e,n,G(i)?!!i.capture:!!i,s):Qt(t,e,n,!1,i,s)}function Qt(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=G(s)?!!s.capture:!!s,a=ee(t);if(a||(t[Gt]=a=new Ht(t)),(n=a.add(e,n,i,o,r)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}var e=te;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Ft||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Zt(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function Yt(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Yt(t,e[r],n,i,s);return null}return n=ie(n),t&&t[Vt]?t.O(e,n,G(i)?!!i.capture:!!i,s):Qt(t,e,n,!0,i,s)}function Xt(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Xt(t,e[r],n,i,s);else i=G(i)?!!i.capture:!!i,n=ie(n),t&&t[Vt]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=$t(r=t.g[e],n,i,s))&&(jt(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=ee(t))&&(e=t.g[e.toString()],t=-1,e&&(t=$t(e,n,i,s)),(n=-1<t?e[t]:null)&&Jt(n))}function Jt(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Vt])zt(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Zt(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=ee(e))?(zt(n,t),0==n.h&&(n.src=null,e[Gt]=null)):jt(t)}}}function Zt(t){return t in Kt?Kt[t]:Kt[t]="on"+t}function te(t,e){if(t.ca)t=!0;else{e=new Pt(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Jt(t),t=n.call(i,e)}return t}function ee(t){return(t=t[Gt])instanceof Ht?t:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(t){return"function"==typeof t?t:(t[ne]||(t[ne]=function(e){return t.handleEvent(e)}),t[ne])}function se(){tt.call(this),this.i=new Ht(this),this.P=this,this.I=null}function re(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new xt(e,t);else if(e instanceof xt)e.target=e.target||t;else{var s=e;mt(e=new xt(i,t),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=oe(o,i,!0,e)&&s}if(s=oe(o=e.g=t,i,!0,e)&&s,s=oe(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)s=oe(o=e.g=n[r],i,!1,e)&&s}function oe(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,h=o.ia||o.src;o.fa&&zt(t.i,o),s=!1!==a.call(h,i)&&s}}return s&&!i.defaultPrevented}Z(se,tt),se.prototype[Vt]=!0,se.prototype.removeEventListener=function(t,e,n,i){Xt(this,t,e,n,i)},se.prototype.M=function(){if(se.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)jt(n[i]);delete e.g[t],e.h--}}this.I=null},se.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},se.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var ae=H.JSON.stringify;function he(){var t=ge;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var ce,ue=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new le),(t=>t.reset()));class le{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function de(t){H.setTimeout((()=>{throw t}),0)}function fe(t,e){ce||function(){var t=H.Promise.resolve(void 0);ce=function(){t.then(me)}}(),pe||(ce(),pe=!0),ge.add(t,e)}var pe=!1,ge=new class{constructor(){this.h=this.g=null}add(t,e){const n=ue.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function me(){for(var t;t=he();){try{t.h.call(t.g)}catch(t){de(t)}var e=ue;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}pe=!1}function ye(t,e){se.call(this),this.h=t||1,this.g=e||H,this.j=X(this.kb,this),this.l=Date.now()}function ve(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function we(t,e,n){if("function"==typeof t)n&&(t=X(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=X(t.handleEvent,t)}return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function Ee(t){t.g=we((()=>{t.g=null,t.i&&(t.i=!1,Ee(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Z(ye,se),(q=ye.prototype).da=!1,q.S=null,q.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),re(this,"tick"),this.da&&(ve(this),this.start()))}},q.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},q.M=function(){ye.Z.M.call(this),ve(this),delete this.g};class be extends tt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ee(this)}M(){super.M(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Te(t){tt.call(this),this.h=t,this.g={}}Z(Te,tt);var Ie=[];function Se(t,e,n,i){Array.isArray(n)||(n&&(Ie[0]=n.toString()),n=Ie);for(var s=0;s<n.length;s++){var r=Wt(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Ae(t){ft(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Jt(t)}),t),t.g={}}function Ce(){this.g=!0}function De(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return ae(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}Te.prototype.M=function(){Te.Z.M.call(this),Ae(this)},Te.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ce.prototype.Aa=function(){this.g=!1},Ce.prototype.info=function(){};var Ne={},_e=null;function ke(){return _e=_e||new se}function Re(t){xt.call(this,Ne.Ma,t)}function Le(t){const e=ke();re(e,new Re(e,t))}function Oe(t,e){xt.call(this,Ne.STAT_EVENT,t),this.stat=e}function Me(t){const e=ke();re(e,new Oe(e,t))}function Fe(t,e){xt.call(this,Ne.Na,t),this.size=e}function xe(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return H.setTimeout((function(){t()}),e)}Ne.Ma="serverreachability",Z(Re,xt),Ne.STAT_EVENT="statevent",Z(Oe,xt),Ne.Na="timingevent",Z(Fe,xt);var Pe={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ue={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ve(){}function qe(t){return t.h||(t.h=t.i())}function Be(){}Ve.prototype.h=null;var je,He={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ze(){xt.call(this,"d")}function $e(){xt.call(this,"c")}function Ge(){}function Ke(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Te(this),this.P=Qe,t=It?125:void 0,this.W=new ye(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new We}function We(){this.i=null,this.g="",this.h=!1}Z(ze,xt),Z($e,xt),Z(Ge,Ve),Ge.prototype.g=function(){return new XMLHttpRequest},Ge.prototype.i=function(){return{}},je=new Ge;var Qe=45e3,Ye={},Xe={};function Je(t,e,n){t.K=1,t.v=Tn(mn(e)),t.s=n,t.U=!0,Ze(t,null)}function Ze(t,e){t.F=Date.now(),sn(t),t.A=mn(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),Fn(n.h,"t",i),t.C=0,n=t.l.H,t.h=new We,t.g=Fi(t.l,n?e:null,!t.s),0<t.O&&(t.L=new be(X(t.Ia,t,t.g),t.O)),Se(t.V,t.g,"readystatechange",t.gb),e=t.H?pt(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Le(1),function(t,e,n,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var u=c[0];c=c[1];var l=u.split("_");o=2<=l.length&&"type"==l[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function tn(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function en(t,e,n){let i,s=!0;for(;!t.I&&t.C<n.length;){if(i=nn(t,n),i==Xe){4==e&&(t.o=4,Me(14),s=!1),De(t.j,t.m,null,"[Incomplete Response]");break}if(i==Ye){t.o=4,Me(15),De(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}De(t.j,t.m,i,null),cn(t,i)}tn(t)&&i!=Xe&&i!=Ye&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Me(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Di(e),e.L=!0,Me(11))):(De(t.j,t.m,n,"[Invalid Chunked Response]"),hn(t),an(t))}function nn(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Xe:(n=Number(e.substring(n,i)),isNaN(n)?Ye:(i+=1)+n>e.length?Xe:(e=e.substr(i,n),t.C=i+n,e))}function sn(t){t.Y=Date.now()+t.P,rn(t,t.P)}function rn(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=xe(X(t.eb,t),e)}function on(t){t.B&&(H.clearTimeout(t.B),t.B=null)}function an(t){0==t.l.G||t.I||ki(t.l,t)}function hn(t){on(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,ve(t.W),Ae(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function cn(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Bn(n.i,t)))if(n.I=t.N,!t.J&&Bn(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;_i(n),vi(n)}Ci(n),Me(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=xe(X(n.ab,n),6e3));if(1>=qn(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else Li(n,11)}else if((t.J||n.g==t)&&_i(n),!ot(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.U=c[0],c=c[1],2==n.G)if("c"==c[0]){n.J=c[1],n.la=c[2];const e=c[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=c[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.i;!r.g&&(ct(t,"spdy")||ct(t,"quic")||ct(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(jn(r,r.h),r.h=null))}if(i.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,bn(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((i=n).oa=Mi(i,i.H?i.la:null,i.W),o.J){Hn(i.i,o);var a=o,h=i.K;h&&a.setTimeout(h),a.B&&(on(a),sn(a)),i.g=o}else Ai(i);0<n.l.length&&bi(n)}else"stop"!=c[0]&&"close"!=c[0]||Li(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Li(n,7):yi(n):"noop"!=c[0]&&n.j&&n.j.wa(c),n.A=0)}Le(4)}catch(t){}}function un(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if($(t)||"string"==typeof t)it(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if($(t)||"string"==typeof t){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if($(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function ln(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof ln)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function dn(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];fn(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)fn(s,i=t.g[e])||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}function fn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(q=Ke.prototype).setTimeout=function(t){this.P=t},q.gb=function(t){t=t.target;const e=this.L;e&&3==di(t)?e.l():this.Ia(t)},q.Ia=function(t){try{if(t==this.g)t:{const u=di(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>u)&&(3!=u||It||this.g&&(this.h.h||this.g.ga()||fi(this.g)))){this.I||4!=u||7==e||Le(8==e||0>=l?3:2),on(this);var n=this.g.ba();this.N=n;e:if(tn(this)){var i=fi(this.g);t="";var s=i.length,r=4==di(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){hn(this),an(this);var o="";break e}this.h.i=new H.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ot(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,Me(12),hn(this),an(this);break t}De(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,cn(this,n)}this.U?(en(this,u,o),It&&this.i&&3==u&&(Se(this.V,this.W,"tick",this.fb),this.W.start())):(De(this.j,this.m,o,null),cn(this,o)),4==u&&hn(this),this.i&&!this.I&&(4==u?ki(this.l,this):(this.i=!1,sn(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Me(12)):(this.o=0,Me(13)),hn(this),an(this)}}}catch(t){}},q.fb=function(){if(this.g){var t=di(this.g),e=this.g.ga();this.C<e.length&&(on(this),en(this,t,e),this.i&&4!=t&&sn(this))}},q.cancel=function(){this.I=!0,hn(this)},q.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Le(3),Me(17)),hn(this),this.o=2,an(this)):rn(this,this.Y-t)},(q=ln.prototype).R=function(){dn(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},q.T=function(){return dn(this),this.g.concat()},q.get=function(t,e){return fn(this.h,t)?this.h[t]:e},q.set=function(t,e){fn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},q.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};var pn=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function gn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof gn){this.g=void 0!==e?e:t.g,yn(this,t.j),this.s=t.s,vn(this,t.i),wn(this,t.m),this.l=t.l,e=t.h;var n=new Rn;n.i=e.i,e.g&&(n.g=new ln(e.g),n.h=e.h),En(this,n),this.o=t.o}else t&&(n=String(t).match(pn))?(this.g=!!e,yn(this,n[1]||"",!0),this.s=In(n[2]||""),vn(this,n[3]||"",!0),wn(this,n[4]),this.l=In(n[5]||"",!0),En(this,n[6]||"",!0),this.o=In(n[7]||"")):(this.g=!!e,this.h=new Rn(null,this.g))}function mn(t){return new gn(t)}function yn(t,e,n){t.j=n?In(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function vn(t,e,n){t.i=n?In(e,!0):e}function wn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function En(t,e,n){e instanceof Rn?(t.h=e,function(t,e){e&&!t.j&&(Ln(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(On(this,e),Fn(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=Sn(e,_n)),t.h=new Rn(e,t.g))}function bn(t,e,n){t.h.set(e,n)}function Tn(t){return bn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function In(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Sn(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,An),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function An(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}gn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Sn(e,Cn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Sn(e,Cn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Sn(n,"/"==n.charAt(0)?Nn:Dn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Sn(n,kn)),t.join("")};var Cn=/[#\/\?@]/g,Dn=/[#\?:]/g,Nn=/[#\?]/g,_n=/[#\?@]/g,kn=/#/g;function Rn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ln(t){t.g||(t.g=new ln,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function On(t,e){Ln(t),e=xn(t,e),fn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,fn((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&dn(t)))}function Mn(t,e){return Ln(t),e=xn(t,e),fn(t.g.h,e)}function Fn(t,e,n){On(t,e),0<n.length&&(t.i=null,t.g.set(xn(t,e),rt(n)),t.h+=n.length)}function xn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(q=Rn.prototype).add=function(t,e){Ln(this),this.i=null,t=xn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},q.forEach=function(t,e){Ln(this),this.g.forEach((function(n,i){it(n,(function(n){t.call(e,n,i,this)}),this)}),this)},q.T=function(){Ln(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n},q.R=function(t){Ln(this);var e=[];if("string"==typeof t)Mn(this,t)&&(e=st(e,this.g.get(xn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=st(e,t[n])}return e},q.set=function(t,e){return Ln(this),this.i=null,Mn(this,t=xn(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},q.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},q.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;""!==i[r]&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};function Pn(t){this.l=t||Un,H.PerformanceNavigationTiming?t=0<(t=H.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(H.g&&H.g.Ea&&H.g.Ea()&&H.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Un=10;function Vn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function qn(t){return t.h?1:t.g?t.g.size:0}function Bn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function jn(t,e){t.g?t.g.add(e):t.h=e}function Hn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function zn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return rt(t.i)}function $n(){}function Gn(){this.g=new $n}function Kn(t,e,n){const i=n||"";try{un(t,(function(t,n){let s=t;G(t)&&(s=ae(t)),e.push(i+n+"="+encodeURIComponent(s))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function Wn(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch(t){}}function Qn(t){this.l=t.$b||null,this.j=t.ib||!1}function Yn(t,e){se.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Xn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Pn.prototype.cancel=function(){if(this.i=zn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},$n.prototype.stringify=function(t){return H.JSON.stringify(t,void 0)},$n.prototype.parse=function(t){return H.JSON.parse(t,void 0)},Z(Qn,Ve),Qn.prototype.g=function(){return new Yn(this.l,this.j)},Qn.prototype.i=function(t){return function(){return t}}({}),Z(Yn,se);var Xn=0;function Jn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Zn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ti(t)}function ti(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(q=Yn.prototype).open=function(t,e){if(this.readyState!=Xn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ti(this)},q.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||H).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Zn(this)),this.readyState=Xn},q.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ti(this)),this.g&&(this.readyState=3,ti(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==H.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Jn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},q.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Zn(this):ti(this),3==this.readyState&&Jn(this)}},q.Ua=function(t){this.g&&(this.response=this.responseText=t,Zn(this))},q.Ta=function(t){this.g&&(this.response=t,Zn(this))},q.ha=function(){this.g&&Zn(this)},q.setRequestHeader=function(t,e){this.v.append(t,e)},q.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},q.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Yn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var ei=H.JSON.parse;function ni(t){se.call(this),this.headers=new ln,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ii,this.K=this.L=!1}Z(ni,se);var ii="",si=/^https?$/i,ri=["POST","PUT"];function oi(t){return"content-type"==t.toLowerCase()}function ai(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,hi(t),ui(t)}function hi(t){t.D||(t.D=!0,re(t,"complete"),re(t,"error"))}function ci(t){if(t.h&&void 0!==j&&(!t.C[1]||4!=di(t)||2!=t.ba()))if(t.v&&4==di(t))we(t.Fa,0,t);else if(re(t,"readystatechange"),4==di(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var s=String(t.H).match(pn)[1]||null;if(!s&&H.self&&H.self.location){var r=H.self.location.protocol;s=r.substr(0,r.length-1)}i=!si.test(s?s.toLowerCase():"")}n=i}if(n)re(t,"complete"),re(t,"success");else{t.m=6;try{var o=2<di(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",hi(t)}}finally{ui(t)}}}function ui(t,e){if(t.g){li(t);const n=t.g,i=t.C[0]?z:null;t.g=null,t.C=null,e||re(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function li(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}function di(t){return t.g?t.g.readyState:0}function fi(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ii:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function pi(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=function(t){let e="";return ft(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):bn(t,e,n))}function gi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mi(t){this.za=0,this.l=[],this.h=new Ce,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=gi("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=gi("baseRetryDelayMs",5e3,t),this.$a=gi("retryDelaySeedMs",1e4,t),this.Ya=gi("forwardChannelMaxRetries",2,t),this.ra=gi("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Pn(t&&t.concurrentRequestLimit),this.Ca=new Gn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function yi(t){if(wi(t),3==t.G){var e=t.V++,n=mn(t.F);bn(n,"SID",t.J),bn(n,"RID",e),bn(n,"TYPE","terminate"),Ii(t,n),(e=new Ke(t,t.h,e,void 0)).K=2,e.v=Tn(mn(n)),n=!1,H.navigator&&H.navigator.sendBeacon&&(n=H.navigator.sendBeacon(e.v.toString(),"")),!n&&H.Image&&((new Image).src=e.v,n=!0),n||(e.g=Fi(e.l,null),e.g.ea(e.v)),e.F=Date.now(),sn(e)}Oi(t)}function vi(t){t.g&&(Di(t),t.g.cancel(),t.g=null)}function wi(t){vi(t),t.u&&(H.clearTimeout(t.u),t.u=null),_i(t),t.i.cancel(),t.m&&("number"==typeof t.m&&H.clearTimeout(t.m),t.m=null)}function Ei(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&bi(t)}function bi(t){Vn(t.i)||t.m||(t.m=!0,fe(t.Ha,t),t.C=0)}function Ti(t,e){var n;n=e?e.m:t.V++;const i=mn(t.F);bn(i,"SID",t.J),bn(i,"RID",n),bn(i,"AID",t.U),Ii(t,i),t.o&&t.s&&pi(i,t.o,t.s),n=new Ke(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Si(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),jn(t.i,n),Je(n,i,e)}function Ii(t,e){t.j&&un({},(function(t,n){bn(e,n,t)}))}function Si(t,e,n){n=Math.min(t.l.length,n);var i=t.j?X(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),r=!1;else try{Kn(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(r){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function Ai(t){t.g||t.u||(t.Y=1,fe(t.Ga,t),t.A=0)}function Ci(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=xe(X(t.Ga,t),Ri(t,t.A)),t.A++,!0)}function Di(t){null!=t.B&&(H.clearTimeout(t.B),t.B=null)}function Ni(t){t.g=new Ke(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=mn(t.oa);bn(e,"RID","rpc"),bn(e,"SID",t.J),bn(e,"CI",t.N?"0":"1"),bn(e,"AID",t.U),Ii(t,e),bn(e,"TYPE","xmlhttp"),t.o&&t.s&&pi(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Tn(mn(e)),n.s=null,n.U=!0,Ze(n,t)}function _i(t){null!=t.v&&(H.clearTimeout(t.v),t.v=null)}function ki(t,e){var n=null;if(t.g==e){_i(t),Di(t),t.g=null;var i=2}else{if(!Bn(t.i,e))return;n=e.D,Hn(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;re(i=ke(),new Fe(i,n,e,s)),bi(t)}else Ai(t);else if(3==(s=e.o)||0==s&&0<t.I||!(1==i&&function(t,e){return!(qn(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=xe(X(t.Ha,t,e),Ri(t,t.C)),t.C++,0)))}(t,e)||2==i&&Ci(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Li(t,5);break;case 4:Li(t,10);break;case 3:Li(t,6);break;default:Li(t,2)}}function Ri(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Li(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=X(t.jb,t);n||(n=new gn("//www.google.com/images/cleardot.gif"),H.location&&"http"==H.location.protocol||yn(n,"https"),Tn(n)),function(t,e){const n=new Ce;if(H.Image){const i=new Image;i.onload=J(Wn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=J(Wn,n,i,"TestLoadImage: error",!1,e),i.onabort=J(Wn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=J(Wn,n,i,"TestLoadImage: timeout",!1,e),H.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else Me(2);t.G=0,t.j&&t.j.va(e),Oi(t),wi(t)}function Oi(t){t.G=0,t.I=-1,t.j&&(0==zn(t.i).length&&0==t.l.length||(t.i.i.length=0,rt(t.l),t.l.length=0),t.j.ua())}function Mi(t,e,n){let i=function(t){return t instanceof gn?mn(t):new gn(t,void 0)}(n);if(""!=i.i)e&&vn(i,e+"."+i.i),wn(i,i.m);else{const t=H.location;i=function(t,e,n,i){var s=new gn(null,void 0);return t&&yn(s,t),e&&vn(s,e),n&&wn(s,n),i&&(s.l=i),s}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&ft(t.aa,(function(t,e){bn(i,e,t)})),e=t.D,n=t.sa,e&&n&&bn(i,e,n),bn(i,"VER",t.ma),Ii(t,i),i}function Fi(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new ni(new Qn({ib:!0})):new ni(t.qa)).L=t.H,e}function xi(){}function Pi(){if(bt&&!(10<=Number(Mt)))throw Error("Environmental error: no available transport.")}function Ui(t,e){se.call(this),this.g=new mi(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ot(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ot(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Bi(this)}function Vi(t){ze.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function qi(){$e.call(this),this.status=1}function Bi(t){this.g=t}(q=ni.prototype).ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():je.g(),this.C=this.u?qe(this.u):qe(je),this.g.onreadystatechange=X(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void ai(this,t)}t=n||"";const s=new ln(this.headers);i&&un(i,(function(t,e){s.set(e,t)})),i=function(t){t:{var e=oi;const n=t.length,i="string"==typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(s.T()),n=H.FormData&&t instanceof H.FormData,!(0<=nt(ri,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{li(this),0<this.B&&((this.K=function(t){return bt&&Lt()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=X(this.pa,this)):this.A=we(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){ai(this,t)}},q.pa=function(){void 0!==j&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,re(this,"timeout"),this.abort(8))},q.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,re(this,"complete"),re(this,"abort"),ui(this))},q.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ui(this,!0)),ni.Z.M.call(this)},q.Fa=function(){this.s||(this.F||this.v||this.l?ci(this):this.cb())},q.cb=function(){ci(this)},q.ba=function(){try{return 2<di(this)?this.g.status:-1}catch(t){return-1}},q.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},q.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ei(e)}},q.Da=function(){return this.m},q.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(q=mi.prototype).ma=8,q.G=1,q.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},q.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Ke(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=pt(r),mt(r,this.P)):r=this.P),null===this.o&&(s.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Si(this,s,e),bn(n=mn(this.F),"RID",t),bn(n,"CVER",22),this.D&&bn(n,"X-HTTP-Session-Id",this.D),Ii(this,n),this.o&&r&&pi(n,this.o,r),jn(this.i,s),this.Ra&&bn(n,"TYPE","init"),this.ja?(bn(n,"$req",e),bn(n,"SID","null"),s.$=!0,Je(s,n,null)):Je(s,n,e),this.G=2}}else 3==this.G&&(t?Ti(this,t):0==this.l.length||Vn(this.i)||Ti(this))},q.Ga=function(){if(this.u=null,Ni(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=xe(X(this.bb,this),t)}},q.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Me(10),vi(this),Ni(this))},q.ab=function(){null!=this.v&&(this.v=null,vi(this),Ci(this),Me(19))},q.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Me(2)):(this.h.info("Failed to ping google.com"),Me(1))},(q=xi.prototype).xa=function(){},q.wa=function(){},q.va=function(){},q.ua=function(){},q.Oa=function(){},Pi.prototype.g=function(t,e){return new Ui(t,e)},Z(Ui,se),Ui.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),fe(X(t.hb,t,e))),Me(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Mi(t,null,t.W),bi(t)},Ui.prototype.close=function(){yi(this.g)},Ui.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Ei(this.g,e)}else this.v?((e={}).__data__=ae(t),Ei(this.g,e)):Ei(this.g,t)},Ui.prototype.M=function(){this.g.j=null,delete this.j,yi(this.g),delete this.g,Ui.Z.M.call(this)},Z(Vi,ze),Z(qi,$e),Z(Bi,xi),Bi.prototype.xa=function(){re(this.g,"a")},Bi.prototype.wa=function(t){re(this.g,new Vi(t))},Bi.prototype.va=function(t){re(this.g,new qi(t))},Bi.prototype.ua=function(){re(this.g,"b")},Pi.prototype.createWebChannel=Pi.prototype.g,Ui.prototype.send=Ui.prototype.u,Ui.prototype.open=Ui.prototype.m,Ui.prototype.close=Ui.prototype.close,Pe.NO_ERROR=0,Pe.TIMEOUT=8,Pe.HTTP_ERROR=6,Ue.COMPLETE="complete",Be.EventType=He,He.OPEN="a",He.CLOSE="b",He.ERROR="c",He.MESSAGE="d",se.prototype.listen=se.prototype.N,ni.prototype.listenOnce=ni.prototype.O,ni.prototype.getLastError=ni.prototype.La,ni.prototype.getLastErrorCode=ni.prototype.Da,ni.prototype.getStatus=ni.prototype.ba,ni.prototype.getResponseJson=ni.prototype.Qa,ni.prototype.getResponseText=ni.prototype.ga,ni.prototype.send=ni.prototype.ea;var ji=Pe,Hi=Ue,zi=Ne,$i=10,Gi=11,Ki=Qn,Wi=Be,Qi=ni;const Yi="@firebase/firestore";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xi{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Xi.UNAUTHENTICATED=new Xi(null),Xi.GOOGLE_CREDENTIALS=new Xi("google-credentials-uid"),Xi.FIRST_PARTY=new Xi("first-party-uid"),Xi.MOCK_USER=new Xi("mock-user");
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let Ji="9.6.1";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Zi=new S("@firebase/firestore");function ts(){return Zi.logLevel}function es(t,...e){if(Zi.logLevel<=w.DEBUG){const n=e.map(ss);Zi.debug(`Firestore (${Ji}): ${t}`,...n)}}function ns(t,...e){if(Zi.logLevel<=w.ERROR){const n=e.map(ss);Zi.error(`Firestore (${Ji}): ${t}`,...n)}}function is(t,...e){if(Zi.logLevel<=w.WARN){const n=e.map(ss);Zi.warn(`Firestore (${Ji}): ${t}`,...n)}}function ss(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function rs(t="Unexpected state"){const e=`FIRESTORE (${Ji}) INTERNAL ASSERTION FAILED: `+t;throw ns(e),new Error(e)}function os(t,e){t||rs()}function as(t,e){return t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const hs={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class cs extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class us{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ls{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ds{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Xi.UNAUTHENTICATED)))}shutdown(){}}class fs{constructor(t){this.t=t,this.currentUser=Xi.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new us;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new us,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{es("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(es("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new us)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(es("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(os("string"==typeof e.accessToken),new ls(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return os(null===t||"string"==typeof t),new Xi(t)}}class ps{constructor(t,e,n){this.type="FirstParty",this.user=Xi.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class gs{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new ps(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Xi.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ms{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ys{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=n=>{t.enqueueRetryable((()=>(t=>(null!=t.error&&es("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`),e(t.token)))(n)))};const n=t=>{es("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>n(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):es("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(os("string"==typeof t.token),new ms(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.p(t),this.T=t=>e.writeSequenceNumber(t))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ws(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */vs.I=-1;class Es{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=ws(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}function bs(t,e){return t<e?-1:t>e?1:0}function Ts(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Is{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new cs(hs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new cs(hs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new cs(hs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new cs(hs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Is.fromMillis(Date.now())}static fromDate(t){return Is.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Is(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?bs(this.nanoseconds,t.nanoseconds):bs(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ss{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ss(t)}static min(){return new Ss(new Is(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function As(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ds{constructor(t,e,n){void 0===e?e=0:e>t.length&&rs(),void 0===n?n=t.length-e:n>t.length-e&&rs(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ds.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ds?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),s=e.get(i);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ns extends Ds{construct(t,e,n){return new Ns(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new cs(hs.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ns(e)}static emptyPath(){return new Ns([])}}const _s=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ks extends Ds{construct(t,e,n){return new ks(t,e,n)}static isValidIdentifier(t){return _s.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ks.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ks(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new cs(hs.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new cs(hs.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new cs(hs.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++)}if(s(),r)throw new cs(hs.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ks(e)}static emptyPath(){return new ks([])}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Rs{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Rs(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Rs(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return bs(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Rs.EMPTY_BYTE_STRING=new Rs("");const Ls=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Os(t){if(os(!!t),"string"==typeof t){let e=0;const n=Ls.exec(t);if(os(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ms(t.seconds),nanos:Ms(t.nanos)}}function Ms(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Fs(t){return"string"==typeof t?Rs.fromBase64String(t):Rs.fromUint8Array(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function xs(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ps(t){const e=t.mapValue.fields.__previous_value__;return xs(e)?Ps(e):e}function Us(t){const e=Os(t.mapValue.fields.__local_write_time__.timestampValue);return new Is(e.seconds,e.nanos)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Vs(t){return null==t}function qs(t){return 0===t&&1/t==-1/0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Bs{constructor(t){this.path=t}static fromPath(t){return new Bs(Ns.fromString(t))}static fromName(t){return new Bs(Ns.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===Ns.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ns.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Bs(new Ns(t.slice()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function js(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xs(t)?4:10:rs()}function Hs(t,e){const n=js(t);if(n!==js(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Us(t).isEqual(Us(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Os(t.timestampValue),i=Os(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Fs(t.bytesValue).isEqual(Fs(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ms(t.geoPointValue.latitude)===Ms(e.geoPointValue.latitude)&&Ms(t.geoPointValue.longitude)===Ms(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ms(t.integerValue)===Ms(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ms(t.doubleValue),i=Ms(e.doubleValue);return n===i?qs(n)===qs(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return Ts(t.arrayValue.values||[],e.arrayValue.values||[],Hs);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(As(n)!==As(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!Hs(n[t],i[t])))return!1;return!0}(t,e);default:return rs()}}function zs(t,e){return void 0!==(t.values||[]).find((t=>Hs(t,e)))}function $s(t,e){const n=js(t),i=js(e);if(n!==i)return bs(n,i);switch(n){case 0:return 0;case 1:return bs(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ms(t.integerValue||t.doubleValue),i=Ms(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Gs(t.timestampValue,e.timestampValue);case 4:return Gs(Us(t),Us(e));case 5:return bs(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Fs(t),i=Fs(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=bs(n[t],i[t]);if(0!==e)return e}return bs(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=bs(Ms(t.latitude),Ms(e.latitude));return 0!==n?n:bs(Ms(t.longitude),Ms(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=$s(n[t],i[t]);if(e)return e}return bs(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},i=Object.keys(n),s=e.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let t=0;t<i.length&&t<r.length;++t){const e=bs(i[t],r[t]);if(0!==e)return e;const o=$s(n[i[t]],s[r[t]]);if(0!==o)return o}return bs(i.length,r.length)}(t.mapValue,e.mapValue);default:throw rs()}}function Gs(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return bs(t,e);const n=Os(t),i=Os(e),s=bs(n.seconds,i.seconds);return 0!==s?s:bs(n.nanos,i.nanos)}function Ks(t){return Ws(t)}function Ws(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Os(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Fs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Bs.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Ws(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const s of e)i?i=!1:n+=",",n+=`${s}:${Ws(t.fields[s])}`;return n+"}"}(t.mapValue):rs();var e,n}function Qs(t){return!!t&&"integerValue"in t}function Ys(t){return!!t&&"arrayValue"in t}function Xs(t){return!!t&&"nullValue"in t}function Js(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zs(t){return!!t&&"mapValue"in t}function tr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cs(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=tr(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=tr(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class er{constructor(t){this.value=t}static empty(){return new er({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Zs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=tr(e)}setAll(t){let e=ks.emptyPath(),n={},i=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=s.popLast()}t?n[s.lastSegment()]=tr(t):i.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,i)}delete(t){const e=this.field(t.popLast());Zs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Hs(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Zs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Cs(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new er(tr(this.value))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class nr{constructor(t,e,n,i,s){this.key=t,this.documentType=e,this.version=n,this.data=i,this.documentState=s}static newInvalidDocument(t){return new nr(t,0,Ss.min(),er.empty(),0)}static newFoundDocument(t,e,n){return new nr(t,1,e,n,0)}static newNoDocument(t,e){return new nr(t,2,e,er.empty(),0)}static newUnknownDocument(t,e){return new nr(t,3,e,er.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=er.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=er.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof nr&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new nr(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ir{constructor(t,e=null,n=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.R=null}}function sr(t,e=null,n=[],i=[],s=null,r=null,o=null){return new ir(t,e,n,i,s,r,o)}function rr(t){const e=as(t);if(null===e.R){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+Ks(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Vs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=vr(e.startAt)),e.endAt&&(t+="|ub:",t+=vr(e.endAt)),e.R=t}return e.R}function or(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Er(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!Hs(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tr(t.startAt,e.startAt)&&Tr(t.endAt,e.endAt)}function ar(t){return Bs.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class hr extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.P(t,e,n):new cr(t,e,n):"array-contains"===e?new fr(t,n):"in"===e?new pr(t,n):"not-in"===e?new gr(t,n):"array-contains-any"===e?new mr(t,n):new hr(t,e,n)}static P(t,e,n){return"in"===e?new ur(t,n):new lr(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v($s(e,this.value)):null!==e&&js(this.value)===js(e)&&this.v($s(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return rs()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class cr extends hr{constructor(t,e,n){super(t,e,n),this.key=Bs.fromName(n.referenceValue)}matches(t){const e=Bs.comparator(t.key,this.key);return this.v(e)}}class ur extends hr{constructor(t,e){super(t,"in",e),this.keys=dr("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class lr extends hr{constructor(t,e){super(t,"not-in",e),this.keys=dr("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function dr(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Bs.fromName(t.referenceValue)))}class fr extends hr{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ys(e)&&zs(e.arrayValue,this.value)}}class pr extends hr{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&zs(this.value.arrayValue,e)}}class gr extends hr{constructor(t,e){super(t,"not-in",e)}matches(t){if(zs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!zs(this.value.arrayValue,e)}}class mr extends hr{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ys(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>zs(this.value.arrayValue,t)))}}class yr{constructor(t,e){this.position=t,this.before=e}}function vr(t){return`${t.before?"b":"a"}:${t.position.map((t=>Ks(t))).join(",")}`}class wr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Er(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function br(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(i=r.field.isKeyField()?Bs.comparator(Bs.fromName(o.referenceValue),n.key):$s(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return t.before?i<=0:i<0}function Tr(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Hs(t.position[n],e.position[n]))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ir{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function Sr(t){return new Ir(t)}function Ar(t){return!Vs(t.limit)&&"F"===t.limitType}function Cr(t){return!Vs(t.limit)&&"L"===t.limitType}function Dr(t){const e=as(t);if(null===e.S){e.S=[];const t=function(t){for(const e of t.filters)if(e.V())return e.field;return null}(e),n=function(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}(e);if(null!==t&&null===n)t.isKeyField()||e.S.push(new wr(t)),e.S.push(new wr(ks.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.S.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new wr(ks.keyField(),t))}}}return e.S}function Nr(t){const e=as(t);if(!e.D)if("F"===e.limitType)e.D=sr(e.path,e.collectionGroup,Dr(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Dr(e)){const e="desc"===n.dir?"asc":"desc";t.push(new wr(n.field,e))}const n=e.endAt?new yr(e.endAt.position,!e.endAt.before):null,i=e.startAt?new yr(e.startAt.position,!e.startAt.before):null;e.D=sr(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.D}function _r(t,e){return or(Nr(t),Nr(e))&&t.limitType===e.limitType}function kr(t){return`${rr(Nr(t))}|lt:${t.limitType}`}function Rr(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Ks(e.value)}`;var e})).join(", ")}]`),Vs(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: "+vr(t.startAt)),t.endAt&&(e+=", endAt: "+vr(t.endAt)),`Target(${e})`}(Nr(t))}; limitType=${t.limitType})`}function Lr(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Bs.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!br(t.startAt,Dr(t),e))&&(!t.endAt||!br(t.endAt,Dr(t),e))}(t,e)}function Or(t){return(e,n)=>{let i=!1;for(const s of Dr(t)){const t=Mr(s,e,n);if(0!==t)return t;i=i||s.field.isKeyField()}return 0}}function Mr(t,e,n){const i=t.field.isKeyField()?Bs.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),s=n.data.field(t);return null!==i&&null!==s?$s(i,s):rs()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return rs()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fr{constructor(){this._=void 0}}function xr(t,e,n){return t instanceof Ur?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Vr?qr(t,e):t instanceof Br?jr(t,e):function(t,e){const n=function(t,e){return t instanceof Hr?Qs(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}(t,e),i=zr(n)+zr(t.N);return Qs(n)&&Qs(t.N)?function(t){return{integerValue:""+t}}(i):function(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qs(e)?"-0":e}}(t.k,i)}(t,e)}function Pr(t,e,n){return t instanceof Vr?qr(t,e):t instanceof Br?jr(t,e):n}class Ur extends Fr{}class Vr extends Fr{constructor(t){super(),this.elements=t}}function qr(t,e){const n=$r(e);for(const e of t.elements)n.some((t=>Hs(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Br extends Fr{constructor(t){super(),this.elements=t}}function jr(t,e){let n=$r(e);for(const e of t.elements)n=n.filter((t=>!Hs(t,e)));return{arrayValue:{values:n}}}class Hr extends Fr{constructor(t,e){super(),this.k=t,this.N=e}}function zr(t){return Ms(t.integerValue||t.doubleValue)}function $r(t){return Ys(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Gr(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Kr{}function Wr(t,e,n){t instanceof Jr?function(t,e,n){const i=t.value.clone(),s=eo(t.fieldTransforms,e,n.transformResults);i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Zr?function(t,e,n){if(!Gr(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=eo(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(to(t)),s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Qr(t,e,n){t instanceof Jr?function(t,e,n){if(!Gr(t.precondition,e))return;const i=t.value.clone(),s=no(t.fieldTransforms,n,e);i.setAll(s),e.convertToFoundDocument(Xr(e),i).setHasLocalMutations()}(t,e,n):t instanceof Zr?function(t,e,n){if(!Gr(t.precondition,e))return;const i=no(t.fieldTransforms,n,e),s=e.data;s.setAll(to(t)),s.setAll(i),e.convertToFoundDocument(Xr(e),s).setHasLocalMutations()}(t,e,n):function(t,e){Gr(t.precondition,e)&&e.convertToNoDocument(Ss.min())}(t,e)}function Yr(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Ts(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Vr&&e instanceof Vr||t instanceof Br&&e instanceof Br?Ts(t.elements,e.elements,Hs):t instanceof Hr&&e instanceof Hr?Hs(t.N,e.N):t instanceof Ur&&e instanceof Ur}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Xr(t){return t.isFoundDocument()?t.version:Ss.min()}class Jr extends Kr{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Zr extends Kr{constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}}function to(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function eo(t,e,n){const i=new Map;os(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,Pr(o,a,n[s]))}return i}function no(t,e,n){const i=new Map;for(const s of t){const t=s.transform,r=n.data.field(s.field);i.set(s.field,xr(t,r,e))}return i}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class io{constructor(t){this.count=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var so,ro;function oo(t){if(void 0===t)return ns("GRPC error has no .code"),hs.UNKNOWN;switch(t){case so.OK:return hs.OK;case so.CANCELLED:return hs.CANCELLED;case so.UNKNOWN:return hs.UNKNOWN;case so.DEADLINE_EXCEEDED:return hs.DEADLINE_EXCEEDED;case so.RESOURCE_EXHAUSTED:return hs.RESOURCE_EXHAUSTED;case so.INTERNAL:return hs.INTERNAL;case so.UNAVAILABLE:return hs.UNAVAILABLE;case so.UNAUTHENTICATED:return hs.UNAUTHENTICATED;case so.INVALID_ARGUMENT:return hs.INVALID_ARGUMENT;case so.NOT_FOUND:return hs.NOT_FOUND;case so.ALREADY_EXISTS:return hs.ALREADY_EXISTS;case so.PERMISSION_DENIED:return hs.PERMISSION_DENIED;case so.FAILED_PRECONDITION:return hs.FAILED_PRECONDITION;case so.ABORTED:return hs.ABORTED;case so.OUT_OF_RANGE:return hs.OUT_OF_RANGE;case so.UNIMPLEMENTED:return hs.UNIMPLEMENTED;case so.DATA_LOSS:return hs.DATA_LOSS;default:return rs()}}(ro=so||(so={}))[ro.OK=0]="OK",ro[ro.CANCELLED=1]="CANCELLED",ro[ro.UNKNOWN=2]="UNKNOWN",ro[ro.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ro[ro.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ro[ro.NOT_FOUND=5]="NOT_FOUND",ro[ro.ALREADY_EXISTS=6]="ALREADY_EXISTS",ro[ro.PERMISSION_DENIED=7]="PERMISSION_DENIED",ro[ro.UNAUTHENTICATED=16]="UNAUTHENTICATED",ro[ro.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ro[ro.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ro[ro.ABORTED=10]="ABORTED",ro[ro.OUT_OF_RANGE=11]="OUT_OF_RANGE",ro[ro.UNIMPLEMENTED=12]="UNIMPLEMENTED",ro[ro.INTERNAL=13]="INTERNAL",ro[ro.UNAVAILABLE=14]="UNAVAILABLE",ro[ro.DATA_LOSS=15]="DATA_LOSS";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ao{constructor(t,e){this.comparator=t,this.root=e||co.EMPTY}insert(t,e){return new ao(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,co.BLACK,null,null))}remove(t){return new ao(this.comparator,this.root.remove(t,this.comparator).copy(null,null,co.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ho(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ho(this.root,t,this.comparator,!1)}getReverseIterator(){return new ho(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ho(this.root,t,this.comparator,!0)}}class ho{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class co{constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:co.RED,this.left=null!=i?i:co.EMPTY,this.right=null!=s?s:co.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,s){return new co(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return co.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return co.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,co.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,co.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw rs();if(this.right.isRed())throw rs();const t=this.left.check();if(t!==this.right.check())throw rs();return t+(this.isRed()?0:1)}}co.EMPTY=null,co.RED=!0,co.BLACK=!1,co.EMPTY=new class{constructor(){this.size=0}get key(){throw rs()}get value(){throw rs()}get color(){throw rs()}get left(){throw rs()}get right(){throw rs()}copy(t,e,n,i,s){return this}insert(t,e,n){return new co(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class uo{constructor(t){this.comparator=t,this.data=new ao(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new lo(this.data.getIterator())}getIteratorFrom(t){return new lo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof uo))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new uo(this.comparator);return e.data=t,e}}class lo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const fo=new ao(Bs.comparator);function po(){return fo}const go=new ao(Bs.comparator);function mo(){return go}new ao(Bs.comparator);const yo=new uo(Bs.comparator);function vo(...t){let e=yo;for(const n of t)e=e.add(n);return e}const wo=new uo(bs);function Eo(){return wo}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bo{constructor(t,e,n,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,To.createSynthesizedTargetChangeForCurrentChange(t,e)),new bo(Ss.min(),n,Eo(),po(),vo())}}class To{constructor(t,e,n,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e){return new To(Rs.EMPTY_BYTE_STRING,e,vo(),vo(),vo())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Io{constructor(t,e,n,i){this.$=t,this.removedTargetIds=e,this.key=n,this.F=i}}class So{constructor(t,e){this.targetId=t,this.O=e}}class Ao{constructor(t,e,n=Rs.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Co{constructor(){this.M=0,this.L=_o(),this.B=Rs.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=vo(),e=vo(),n=vo();return this.L.forEach(((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:rs()}})),new To(this.B,this.U,t,e,n)}H(){this.q=!1,this.L=_o()}J(t,e){this.q=!0,this.L=this.L.insert(t,e)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class Do{constructor(t){this.et=t,this.nt=new Map,this.st=po(),this.it=No(),this.rt=new uo(bs)}ot(t){for(const e of t.$)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ut(t){this.forEachTarget(t,(e=>{const n=this.ht(e);switch(t.state){case 0:this.lt(e)&&n.W(t.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(t.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(e);break;case 3:this.lt(e)&&(n.tt(),n.W(t.resumeToken));break;case 4:this.lt(e)&&(this.ft(e),n.W(t.resumeToken));break;default:rs()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.nt.forEach(((t,n)=>{this.lt(n)&&e(n)}))}dt(t){const e=t.targetId,n=t.O.count,i=this.wt(e);if(i){const t=i.target;if(ar(t))if(0===n){const n=new Bs(t.path);this.ct(e,n,nr.newNoDocument(n,Ss.min()))}else os(1===n);else this._t(e)!==n&&(this.ft(e),this.rt=this.rt.add(e))}}gt(t){const e=new Map;this.nt.forEach(((n,i)=>{const s=this.wt(i);if(s){if(n.current&&ar(s.target)){const e=new Bs(s.target.path);null!==this.st.get(e)||this.yt(i,e)||this.ct(i,e,nr.newNoDocument(e,t))}n.j&&(e.set(i,n.G()),n.H())}}));let n=vo();this.it.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))}));const i=new bo(t,e,this.rt,this.st,n);return this.st=po(),this.it=No(),this.rt=new uo(bs),i}at(t,e){if(!this.lt(t))return;const n=this.yt(t,e.key)?2:0;this.ht(t).J(e.key,n),this.st=this.st.insert(e.key,e),this.it=this.it.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.lt(t))return;const i=this.ht(t);this.yt(t,e)?i.J(e,1):i.Y(e),this.it=this.it.insert(e,this.Tt(e).delete(t)),n&&(this.st=this.st.insert(e,n))}removeTarget(t){this.nt.delete(t)}_t(t){const e=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let e=this.nt.get(t);return e||(e=new Co,this.nt.set(t,e)),e}Tt(t){let e=this.it.get(t);return e||(e=new uo(bs),this.it=this.it.insert(t,e)),e}lt(t){const e=null!==this.wt(t);return e||es("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.nt.get(t);return e&&e.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new Co),this.et.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null)}))}yt(t,e){return this.et.getRemoteKeysForTarget(t).has(e)}}function No(){return new ao(Bs.comparator)}function _o(){return new ao(Bs.comparator)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ko={asc:"ASCENDING",desc:"DESCENDING"},Ro={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Lo{constructor(t,e){this.databaseId=t,this.C=e}}function Oo(t){return os(!!t),Ss.fromTimestamp(function(t){const e=Os(t);return new Is(e.seconds,e.nanos)}(t))}function Mo(t){const e=Ns.fromString(t);return os(Xo(e)),e}function Fo(t,e){const n=Mo(e);if(n.get(1)!==t.databaseId.projectId)throw new cs(hs.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new cs(hs.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Bs(Uo(n))}function xo(t,e){return function(t,e){return function(t){return new Ns(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}(t.databaseId,e)}function Po(t){return new Ns(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Uo(t){return os(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Vo(t,e){return{documents:[xo(t,e.path)]}}function qo(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=xo(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=xo(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Js(t.value))return{unaryFilter:{field:Ko(t.field),op:"IS_NAN"}};if(Xs(t.value))return{unaryFilter:{field:Ko(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Js(t.value))return{unaryFilter:{field:Ko(t.field),op:"IS_NOT_NAN"}};if(Xs(t.value))return{unaryFilter:{field:Ko(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ko(t.field),op:Go(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ko(t.field),direction:$o(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.C||Vs(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Ho(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Ho(e.endAt)),n}function Bo(t){let e=function(t){const e=Mo(t);return 4===e.length?Ns.emptyPath():Uo(e)}(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){os(1===i);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=jo(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new wr(Wo(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Vs(e)?null:e}(n.limit));let h=null;n.startAt&&(h=zo(n.startAt));let c=null;return n.endAt&&(c=zo(n.endAt)),function(t,e,n,i,s,r,o,a){return new Ir(t,e,n,i,s,r,o,a)}(e,s,o,r,a,"F",h,c)}function jo(t){return t?void 0!==t.unaryFilter?[Yo(t)]:void 0!==t.fieldFilter?[Qo(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>jo(t))).reduce(((t,e)=>t.concat(e))):rs():[]}function Ho(t){return{before:t.before,values:t.position}}function zo(t){const e=!!t.before,n=t.values||[];return new yr(n,e)}function $o(t){return ko[t]}function Go(t){return Ro[t]}function Ko(t){return{fieldPath:t.canonicalString()}}function Wo(t){return ks.fromServerFormat(t.fieldPath)}function Qo(t){return hr.create(Wo(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return rs()}}(t.fieldFilter.op),t.fieldFilter.value)}function Yo(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Wo(t.unaryFilter.field);return hr.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Wo(t.unaryFilter.field);return hr.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Wo(t.unaryFilter.field);return hr.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Wo(t.unaryFilter.field);return hr.create(s,"!=",{nullValue:"NULL_VALUE"});default:return rs()}}function Xo(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Jo{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&rs(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Jo(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Jo?e:Jo.resolve(e)}catch(t){return Jo.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Jo.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Jo.reject(e)}static resolve(t){return new Jo(((e,n)=>{e(t)}))}static reject(t){return new Jo(((e,n)=>{n(t)}))}static waitFor(t){return new Jo(((e,n)=>{let i=0,s=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++s,r&&s===i&&e()}),(t=>n(t)))})),r=!0,s===i&&e()}))}static or(t){let e=Jo.resolve(!1);for(const n of t)e=e.next((t=>t?Jo.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}}function Zo(t){return"IndexedDbTransactionError"===t.name}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ta{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&Wr(i,t,n[e])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Qr(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Qr(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(Ss.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),vo())}isEqual(t){return this.batchId===t.batchId&&Ts(this.mutations,t.mutations,((t,e)=>Yr(t,e)))&&Ts(this.baseMutations,t.baseMutations,((t,e)=>Yr(t,e)))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ea{constructor(t,e,n,i,s=Ss.min(),r=Ss.min(),o=Rs.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new ea(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new ea(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new ea(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class na{constructor(t){this.Gt=t}}function ia(t){const e=Bo({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new Ir(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sa{constructor(){this.zt=new ra}addToCollectionParentIndex(t,e){return this.zt.add(e),Jo.resolve()}getCollectionParents(t,e){return Jo.resolve(this.zt.getEntries(e))}}class ra{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new uo(Ns.comparator),s=!i.has(n);return this.index[e]=i.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new uo(Ns.comparator)).toArray()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class oa{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new oa(0)}static re(){return new oa(-1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function aa(t){if(t.code!==hs.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;es("LocalStore","Unexpectedly lost primary lease")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ha{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0!==i){for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),!0;return!1}forEach(t){Cs(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(this.inner)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ca{constructor(t,e,n){this.Je=t,this.An=e,this.Jt=n}Rn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Pn(t,e,n)))}Pn(t,e,n){return this.Je.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}bn(t,e){t.forEach(((t,n)=>{for(const t of e)t.applyToLocalView(n)}))}vn(t,e){return this.Je.getEntries(t,e).next((e=>this.Vn(t,e).next((()=>e))))}Vn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.bn(e,t)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Bs.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Sn(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.Dn(t,e,n):this.Cn(t,e,n)}Sn(t,e){return this.Rn(t,new Bs(e)).next((t=>{let e=mo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Dn(t,e,n){const i=e.collectionGroup;let s=mo();return this.Jt.getCollectionParents(t,i).next((r=>Jo.forEach(r,(r=>{const o=function(t,e){return new Ir(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(i));return this.Cn(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}Cn(t,e,n){let i,s;return this.Je.getDocumentsMatchingQuery(t,e,n).next((n=>(i=n,this.An.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(s=e,this.Nn(t,s,i).next((t=>{i=t;for(const t of s)for(const e of t.mutations){const n=e.key;let s=i.get(n);null==s&&(s=nr.newInvalidDocument(n),i=i.insert(n,s)),Qr(e,s,t.localWriteTime),s.isFoundDocument()||(i=i.remove(n))}}))))).next((()=>(i.forEach(((t,n)=>{Lr(e,n)||(i=i.remove(t))})),i)))}Nn(t,e,n){let i=vo();for(const t of e)for(const e of t.mutations)e instanceof Zr&&null===n.get(e.key)&&(i=i.add(e.key));let s=n;return this.Je.getEntries(t,i).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(s=s.insert(t,e))})),s)))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ua{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.kn=n,this.xn=i}static $n(t,e){let n=vo(),i=vo();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new ua(t,e.fromCache,n,i)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class la{Fn(t){this.On=t}getDocumentsMatchingQuery(t,e,n,i){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(Ss.min())?this.Mn(t,e):this.On.vn(t,i).next((s=>{const r=this.Ln(e,s);return(Ar(e)||Cr(e))&&this.Bn(e.limitType,r,i,n)?this.Mn(t,e):(ts()<=w.DEBUG&&es("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Rr(e)),this.On.getDocumentsMatchingQuery(t,e,n).next((t=>(r.forEach((e=>{t=t.insert(e.key,e)})),t))))}))}Ln(t,e){let n=new uo(Or(t));return e.forEach(((e,i)=>{Lr(t,i)&&(n=n.add(i))})),n}Bn(t,e,n,i){if(n.size!==e.size)return!0;const s="F"===t?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mn(t,e){return ts()<=w.DEBUG&&es("QueryEngine","Using full collection scan to execute query:",Rr(e)),this.On.getDocumentsMatchingQuery(t,e,Ss.min())}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class da{constructor(t,e,n,i){this.persistence=t,this.Un=e,this.k=i,this.qn=new ao(bs),this.Kn=new ha((t=>rr(t)),or),this.jn=Ss.min(),this.An=t.getMutationQueue(n),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new ca(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.qn)))}}async function fa(t,e){const n=as(t);let i=n.An,s=n.Wn;const r=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.An.getAllMutationBatches(t).next((o=>(r=o,i=n.persistence.getMutationQueue(e),s=new ca(n.Qn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(t)))).next((e=>{const n=[],i=[];let o=vo();for(const t of r){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return s.vn(t,o).next((t=>({Gn:t,removedBatchIds:n,addedBatchIds:i})))}))}));return n.An=i,n.Wn=s,n.Un.Fn(n.Wn),r}function pa(t){const e=as(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.He.getLastRemoteSnapshotVersion(t)))}function ga(t,e){const n=as(t),i=e.snapshotVersion;let s=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Qn.newChangeBuffer({trackRemovals:!0});s=n.qn;const o=[];e.targetChanges.forEach(((e,r)=>{const a=s.get(r);if(!a)return;o.push(n.He.removeMatchingKeys(t,e.removedDocuments,r).next((()=>n.He.addMatchingKeys(t,e.addedDocuments,r))));const h=e.resumeToken;if(h.approximateByteSize()>0){const c=a.withResumeToken(h,i).withSequenceNumber(t.currentSequenceNumber);s=s.insert(r,c),function(t,e,n){return os(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,c,e)&&o.push(n.He.updateTargetData(t,c))}}));let a=po();if(e.documentUpdates.forEach(((i,s)=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(function(t,e,n,i,s){let r=vo();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=po();return n.forEach(((n,o)=>{const a=t.get(n),h=(null==s?void 0:s.get(n))||i;o.isNoDocument()&&o.version.isEqual(Ss.min())?(e.removeEntry(n,h),r=r.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,h),r=r.insert(n,o)):es("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),r}))}(t,r,e.documentUpdates,i,void 0).next((t=>{a=t}))),!i.isEqual(Ss.min())){const e=n.He.getLastRemoteSnapshotVersion(t).next((e=>n.He.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return Jo.waitFor(o).next((()=>r.apply(t))).next((()=>n.Wn.Vn(t,a))).next((()=>a))})).then((t=>(n.qn=s,t)))}async function ma(t,e,n){const i=as(t),s=i.qn.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(t=>i.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!Zo(t))throw t;es("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.qn=i.qn.remove(e),i.Kn.delete(s.target)}function ya(t,e,n){const i=as(t);let s=Ss.min(),r=vo();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=as(t),s=i.Kn.get(n);return void 0!==s?Jo.resolve(i.qn.get(s)):i.He.getTargetData(e,n)}(i,t,Nr(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,i.He.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>i.Un.getDocumentsMatchingQuery(t,e,n?s:Ss.min(),n?r:vo()))).next((t=>({documents:t,zn:r})))))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class va{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,e){return Jo.resolve(this.Xn.get(e))}saveBundleMetadata(t,e){var n;return this.Xn.set(e.id,{id:(n=e).id,version:n.version,createTime:Oo(n.createTime)}),Jo.resolve()}getNamedQuery(t,e){return Jo.resolve(this.Zn.get(e))}saveNamedQuery(t,e){return this.Zn.set(e.name,function(t){return{name:t.name,query:ia(t.bundledQuery),readTime:Oo(t.readTime)}}(e)),Jo.resolve()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wa{constructor(){this.ts=new uo(Ea.es),this.ns=new uo(Ea.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,e){const n=new Ea(t,e);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.os(new Ea(t,e))}cs(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new Bs(new Ns([])),n=new Ea(e,t),i=new Ea(e,t+1),s=[];return this.ns.forEachInRange([n,i],(t=>{this.os(t),s.push(t.key)})),s}hs(){this.ts.forEach((t=>this.os(t)))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const e=new Bs(new Ns([])),n=new Ea(e,t),i=new Ea(e,t+1);let s=vo();return this.ns.forEachInRange([n,i],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new Ea(t,0),n=this.ts.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ea{constructor(t,e){this.key=t,this.fs=e}static es(t,e){return Bs.comparator(t.key,e.key)||bs(t.fs,e.fs)}static ss(t,e){return bs(t.fs,e.fs)||Bs.comparator(t.key,e.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ba{constructor(t,e){this.Jt=t,this.referenceDelegate=e,this.An=[],this.ds=1,this.ws=new uo(Ea.es)}checkEmpty(t){return Jo.resolve(0===this.An.length)}addMutationBatch(t,e,n,i){const s=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const r=new ta(s,e,n,i);this.An.push(r);for(const e of i)this.ws=this.ws.add(new Ea(e.key,s)),this.Jt.addToCollectionParentIndex(t,e.key.path.popLast());return Jo.resolve(r)}lookupMutationBatch(t,e){return Jo.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.gs(n),s=i<0?0:i;return Jo.resolve(this.An.length>s?this.An[s]:null)}getHighestUnacknowledgedBatchId(){return Jo.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return Jo.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ea(e,0),i=new Ea(e,Number.POSITIVE_INFINITY),s=[];return this.ws.forEachInRange([n,i],(t=>{const e=this._s(t.fs);s.push(e)})),Jo.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new uo(bs);return e.forEach((t=>{const e=new Ea(t,0),i=new Ea(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([e,i],(t=>{n=n.add(t.fs)}))})),Jo.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let s=n;Bs.isDocumentKey(s)||(s=s.child(""));const r=new Ea(new Bs(s),0);let o=new uo(bs);return this.ws.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.fs)),!0)}),r),Jo.resolve(this.ys(o))}ys(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){os(0===this.ps(e.batchId,"removed")),this.An.shift();let n=this.ws;return Jo.forEach(e.mutations,(i=>{const s=new Ea(i.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.ws=n}))}ee(t){}containsKey(t,e){const n=new Ea(e,0),i=this.ws.firstAfterOrEqual(n);return Jo.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.An.length,Jo.resolve()}ps(t,e){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const e=this.gs(t);return e<0||e>=this.An.length?null:this.An[e]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ta{constructor(t,e){this.Jt=t,this.Ts=e,this.docs=new ao(Bs.comparator),this.size=0}addEntry(t,e,n){const i=e.key,s=this.docs.get(i),r=s?s.size:0,o=this.Ts(e);return this.docs=this.docs.insert(i,{document:e.clone(),size:o,readTime:n}),this.size+=o-r,this.Jt.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Jo.resolve(n?n.document.clone():nr.newInvalidDocument(e))}getEntries(t,e){let n=po();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():nr.newInvalidDocument(t))})),Jo.resolve(n)}getDocumentsMatchingQuery(t,e,n){let i=po();const s=new Bs(e.path.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:t,value:{document:s,readTime:o}}=r.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||Lr(e,s)&&(i=i.insert(s.key,s.clone()))}return Jo.resolve(i)}Es(t,e){return Jo.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Ia(this)}getSize(t){return Jo.resolve(this.size)}}class Ia extends class{constructor(){this.changes=new ha((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:Ss.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:nr.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Jo.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.De=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.document.isValidDocument()?e.push(this.De.addEntry(t,i.document,this.getReadTime(n))):this.De.removeEntry(n)})),Jo.waitFor(e)}getFromCache(t,e){return this.De.getEntry(t,e)}getAllFromCache(t,e){return this.De.getEntries(t,e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sa{constructor(t){this.persistence=t,this.Is=new ha((t=>rr(t)),or),this.lastRemoteSnapshotVersion=Ss.min(),this.highestTargetId=0,this.As=0,this.Rs=new wa,this.targetCount=0,this.Ps=oa.ie()}forEachTarget(t,e){return this.Is.forEach(((t,n)=>e(n))),Jo.resolve()}getLastRemoteSnapshotVersion(t){return Jo.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Jo.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.Ps.next(),Jo.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.As&&(this.As=e),Jo.resolve()}ce(t){this.Is.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ps=new oa(e),this.highestTargetId=e),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,e){return this.ce(e),this.targetCount+=1,Jo.resolve()}updateTargetData(t,e){return this.ce(e),Jo.resolve()}removeTargetData(t,e){return this.Is.delete(e.target),this.Rs.us(e.targetId),this.targetCount-=1,Jo.resolve()}removeTargets(t,e,n){let i=0;const s=[];return this.Is.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Is.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),Jo.waitFor(s).next((()=>i))}getTargetCount(t){return Jo.resolve(this.targetCount)}getTargetData(t,e){const n=this.Is.get(e)||null;return Jo.resolve(n)}addMatchingKeys(t,e,n){return this.Rs.rs(e,n),Jo.resolve()}removeMatchingKeys(t,e,n){this.Rs.cs(e,n);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach((e=>{s.push(i.markPotentiallyOrphaned(t,e))})),Jo.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Rs.us(e),Jo.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Rs.ls(e);return Jo.resolve(n)}containsKey(t,e){return Jo.resolve(this.Rs.containsKey(e))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Aa{constructor(t,e){this.bs={},this.Be=new vs(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new Sa(this),this.Jt=new sa,this.Je=function(t,e){return new Ta(t,e)}(this.Jt,(t=>this.referenceDelegate.vs(t))),this.k=new na(e),this.Ye=new va(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new ba(this.Jt,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,e,n){es("MemoryPersistence","Starting transaction:",t);const i=new Ca(this.Be.next());return this.referenceDelegate.Vs(),n(i).next((t=>this.referenceDelegate.Ss(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ds(t,e){return Jo.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class Ca extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class Da{constructor(t){this.persistence=t,this.Cs=new wa,this.Ns=null}static ks(t){return new Da(t)}get xs(){if(this.Ns)return this.Ns;throw rs()}addReference(t,e,n){return this.Cs.addReference(n,e),this.xs.delete(n.toString()),Jo.resolve()}removeReference(t,e,n){return this.Cs.removeReference(n,e),this.xs.add(n.toString()),Jo.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Jo.resolve()}removeTarget(t,e){this.Cs.us(e.targetId).forEach((t=>this.xs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.xs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Vs(){this.Ns=new Set}Ss(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Jo.forEach(this.xs,(n=>{const i=Bs.fromPath(n);return this.$s(t,i).next((t=>{t||e.removeEntry(i)}))})).next((()=>(this.Ns=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())}))}vs(t){return 0}$s(t,e){return Jo.or([()=>Jo.resolve(this.Cs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ds(t,e)])}}class Na{constructor(){this.activeTargetIds=Eo()}Ms(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _a{constructor(){this.pi=new Na,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.pi.Ms(t),this.Ti[t]||"not-current"}updateQueryState(t,e,n){this.Ti[t]=e}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new Na,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ka{Ei(t){}shutdown(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ra{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){es("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Pi(){es("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const La={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Oa{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Fi(t){this.ki(t)}Oi(t){this.xi(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ma extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Mi=e+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,e,n,i,s){const r=this.Ui(t,e);es("RestConnection","Sending: ",r,n);const o={};return this.qi(o,i,s),this.Ki(t,r,o,n).then((t=>(es("RestConnection","Received: ",t),t)),(e=>{throw is("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}ji(t,e,n,i,s){return this.Bi(t,e,n,i,s)}qi(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ji,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}Ui(t,e){const n=La[t];return`${this.Mi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,e,n,i){return new Promise(((s,r)=>{const o=new Qi;o.listenOnce(Hi.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case ji.NO_ERROR:const e=o.getResponseJson();es("Connection","XHR received:",JSON.stringify(e)),s(e);break;case ji.TIMEOUT:es("Connection",'RPC "'+t+'" timed out'),r(new cs(hs.DEADLINE_EXCEEDED,"Request time out"));break;case ji.HTTP_ERROR:const n=o.getStatus();if(es("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(hs).indexOf(e)>=0?e:hs.UNKNOWN}(t.status);r(new cs(e,t.message))}else r(new cs(hs.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new cs(hs.UNAVAILABLE,"Connection failed."));break;default:rs()}}finally{es("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}Qi(t,e,n){const i=[this.Mi,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=new Pi,r=ke(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Ki({})),this.qi(o.initMessageHeaders,e,n),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())||"object"==typeof navigator&&"ReactNative"===navigator.product||h().indexOf("Electron/")>=0||function(){const t=h();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}()||h().indexOf("MSAppHost/")>=0||function(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");es("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let u=!1,l=!1;const d=new Oa({Vi:t=>{l?es("Connection","Not sending because WebChannel is closed:",t):(u||(es("Connection","Opening WebChannel transport."),c.open(),u=!0),es("Connection","WebChannel sending:",t),c.send(t))},Si:()=>c.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(c,Wi.EventType.OPEN,(()=>{l||es("Connection","WebChannel transport opened.")})),f(c,Wi.EventType.CLOSE,(()=>{l||(l=!0,es("Connection","WebChannel transport closed"),d.Fi())})),f(c,Wi.EventType.ERROR,(t=>{l||(l=!0,is("Connection","WebChannel transport errored:",t),d.Fi(new cs(hs.UNAVAILABLE,"The operation could not be completed")))})),f(c,Wi.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];os(!!n);const i=n,s=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(s){es("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=so[t];if(void 0!==e)return oo(e)}(t),n=s.message;void 0===e&&(e=hs.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),l=!0,d.Fi(new cs(e,n)),c.close()}else es("Connection","WebChannel received:",n),d.Oi(n)}})),f(r,zi.STAT_EVENT,(t=>{t.stat===$i?es("Connection","Detected buffering proxy"):t.stat===Gi&&es("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.$i()}),0),d}}function Fa(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function xa(t){return new Lo(t,!0)}class Pa{constructor(t,e,n=1e3,i=1.5,s=6e4){this.Oe=t,this.timerId=e,this.Wi=n,this.Gi=i,this.zi=s,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),i=Math.max(0,e-n);i>0&&es("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,i,(()=>(this.Yi=Date.now(),t()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ua extends class{constructor(t,e,n,i,s,r,o,a){this.Oe=t,this.nr=n,this.sr=i,this.ir=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Pa(t,e)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,e){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():e&&e.code===hs.RESOURCE_EXHAUSTED?(ns(e.toString()),ns("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):e&&e.code===hs.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(e)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),e=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.rr===e&&this.Ir(t,n)}),(e=>{t((()=>{const t=new cs(hs.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ar(t)}))}))}Ir(t,e){const n=this.Er(this.rr);this.stream=this.Rr(t,e),this.stream.Di((()=>{n((()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((t=>{n((()=>this.Ar(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(t){return es("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Er(t){return e=>{this.Oe.enqueueAndForget((()=>this.rr===t?e():(es("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}{constructor(t,e,n,i,s,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,r),this.k=s}Rr(t,e){return this.ir.Qi("Listen",t,e)}onMessage(t){this.ur.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:rs()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(t,e){return t.C?(os(void 0===e||"string"==typeof e),Rs.fromBase64String(e||"")):(os(void 0===e||e instanceof Uint8Array),Rs.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?hs.UNKNOWN:oo(t.code);return new cs(e,t.message||"")}(o);n=new Ao(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Fo(t,i.document.name),r=Oo(i.document.updateTime),o=new er({mapValue:{fields:i.document.fields}}),a=nr.newFoundDocument(s,r,o),h=i.targetIds||[],c=i.removedTargetIds||[];n=new Io(h,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Fo(t,i.document),r=i.readTime?Oo(i.readTime):Ss.min(),o=nr.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Io([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Fo(t,i.document),r=i.removedTargetIds||[];n=new Io([],r,s,null)}else{if(!("filter"in e))return rs();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,s=new io(i),r=t.targetId;n=new So(r,s)}}return n}(this.k,t),n=function(t){if(!("targetChange"in t))return Ss.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Ss.min():e.readTime?Oo(e.readTime):Ss.min()}(t);return this.listener.Pr(e,n)}br(t){const e={};e.database=Po(this.k),e.addTarget=function(t,e){let n;const i=e.target;return n=ar(i)?{documents:Vo(t,i)}:{query:qo(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=function(t,e){return t.C?e.toBase64():e.toUint8Array()}(t,e.resumeToken):e.snapshotVersion.compareTo(Ss.min())>0&&(n.readTime=function(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}(t,e.snapshotVersion.toTimestamp())),n}(this.k,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return rs()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.k,t);n&&(e.labels=n),this.gr(e)}vr(t){const e={};e.database=Po(this.k),e.removeTarget=t,this.gr(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Va extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.ir=n,this.k=i,this.$r=!1}Fr(){if(this.$r)throw new cs(hs.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.ir.Bi(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===hs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new cs(hs.UNKNOWN,t.toString())}))}ji(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.ir.ji(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===hs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new cs(hs.UNKNOWN,t.toString())}))}terminate(){this.$r=!0}}class qa{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Ur("Offline")))}set(t){this.jr(),this.Or=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(ns(e),this.Lr=!1):es("OnlineStateTracker",e)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ba{constructor(t,e,n,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=s,this.Hr.Ei((t=>{n.enqueueAndForget((async()=>{Ya(this)&&(es("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=as(t);e.Gr.add(4),await Ha(e),e.Jr.set("Unknown"),e.Gr.delete(4),await ja(e)}(this))}))})),this.Jr=new qa(n,i)}}async function ja(t){if(Ya(t))for(const e of t.zr)await e(!0)}async function Ha(t){for(const e of t.zr)await e(!1)}function za(t,e){const n=as(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Qa(n)?Wa(n):nh(n).lr()&&Ga(n,e))}function $a(t,e){const n=as(t),i=nh(n);n.Wr.delete(e),i.lr()&&Ka(n,e),0===n.Wr.size&&(i.lr()?i._r():Ya(n)&&n.Jr.set("Unknown"))}function Ga(t,e){t.Yr.X(e.targetId),nh(t).br(e)}function Ka(t,e){t.Yr.X(e),nh(t).vr(e)}function Wa(t){t.Yr=new Do({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),nh(t).start(),t.Jr.Br()}function Qa(t){return Ya(t)&&!nh(t).hr()&&t.Wr.size>0}function Ya(t){return 0===as(t).Gr.size}function Xa(t){t.Yr=void 0}async function Ja(t){t.Wr.forEach(((e,n)=>{Ga(t,e)}))}async function Za(t,e){Xa(t),Qa(t)?(t.Jr.Kr(e),Wa(t)):t.Jr.set("Unknown")}async function th(t,e,n){if(t.Jr.set("Online"),e instanceof Ao&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.Wr.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.Wr.delete(i),t.Yr.removeTarget(i))}(t,e)}catch(n){es("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await eh(t,n)}else if(e instanceof Io?t.Yr.ot(e):e instanceof So?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(Ss.min()))try{const e=await pa(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Yr.gt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.Wr.get(i);s&&t.Wr.set(i,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.Wr.get(e);if(!n)return;t.Wr.set(e,n.withResumeToken(Rs.EMPTY_BYTE_STRING,n.snapshotVersion)),Ka(t,e);const i=new ea(n.target,e,1,n.sequenceNumber);Ga(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){es("RemoteStore","Failed to raise snapshot:",e),await eh(t,e)}}async function eh(t,e,n){if(!Zo(e))throw e;t.Gr.add(1),await Ha(t),t.Jr.set("Offline"),n||(n=()=>pa(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{es("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await ja(t)}))}function nh(t){return t.Xr||(t.Xr=function(t,e,n){const i=as(t);return i.Fr(),new Ua(e,i.ir,i.authCredentials,i.appCheckCredentials,i.k,n)
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}(t.datastore,t.asyncQueue,{Di:Ja.bind(null,t),Ni:Za.bind(null,t),Pr:th.bind(null,t)}),t.zr.push((async e=>{e?(t.Xr.wr(),Qa(t)?Wa(t):t.Jr.set("Unknown")):(await t.Xr.stop(),Xa(t))}))),t.Xr
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class ih{constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new us,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new ih(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new cs(hs.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sh(t,e){if(ns("AsyncQueue",`${e}: ${t}`),Zo(t))return new cs(hs.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rh{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Bs.comparator(e.key,n.key):(t,e)=>Bs.comparator(t.key,e.key),this.keyedMap=mo(),this.sortedSet=new ao(this.comparator)}static emptySet(t){return new rh(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof rh))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new rh;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class oh{constructor(){this.eo=new ao(Bs.comparator)}track(t){const e=t.doc.key,n=this.eo.get(e);n?0!==t.type&&3===n.type?this.eo=this.eo.insert(e,t):3===t.type&&1!==n.type?this.eo=this.eo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.eo=this.eo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.eo=this.eo.remove(e):1===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):rs():this.eo=this.eo.insert(e,t)}no(){const t=[];return this.eo.inorderTraversal(((e,n)=>{t.push(n)})),t}}class ah{constructor(t,e,n,i,s,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new ah(t,e,rh.emptySet(e),s,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&_r(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hh{constructor(){this.so=void 0,this.listeners=[]}}class ch{constructor(){this.queries=new ha((t=>kr(t)),_r),this.onlineState="Unknown",this.io=new Set}}async function uh(t,e){const n=as(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new hh),s)try{r.so=await n.onListen(i)}catch(t){const n=sh(t,`Initialization of query '${Rr(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,r),r.listeners.push(e),e.ro(n.onlineState),r.so&&e.oo(r.so)&&ph(n)}async function lh(t,e){const n=as(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function dh(t,e){const n=as(t);let i=!1;for(const t of e){const e=t.query,s=n.queries.get(e);if(s){for(const e of s.listeners)e.oo(t)&&(i=!0);s.so=t}}i&&ph(n)}function fh(t,e,n){const i=as(t),s=i.queries.get(e);if(s)for(const t of s.listeners)t.onError(n);i.queries.delete(e)}function ph(t){t.io.forEach((t=>{t.next()}))}class gh{constructor(t,e,n){this.query=t,this.ao=e,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new ah(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.co?this.ho(t)&&(this.ao.next(t),e=!0):this.lo(t,this.onlineState)&&(this.fo(t),e=!0),this.uo=t,e}onError(t){this.ao.error(t)}ro(t){this.onlineState=t;let e=!1;return this.uo&&!this.co&&this.lo(this.uo,t)&&(this.fo(this.uo),e=!0),e}lo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.wo&&n||t.docs.isEmpty()&&"Offline"!==e)}ho(t){if(t.docChanges.length>0)return!0;const e=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}fo(t){t=ah.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.co=!0,this.ao.next(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class mh{constructor(t){this.key=t}}class yh{constructor(t){this.key=t}}class vh{constructor(t,e){this.query=t,this.To=e,this.Eo=null,this.current=!1,this.Io=vo(),this.mutatedKeys=vo(),this.Ao=Or(t),this.Ro=new rh(this.Ao)}get Po(){return this.To}bo(t,e){const n=e?e.vo:new oh,i=e?e.Ro:this.Ro;let s=e?e.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a=Ar(this.query)&&i.size===this.query.limit?i.last():null,h=Cr(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const c=i.get(t),u=Lr(this.query,e)?e:null,l=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?l!==d&&(n.track({type:3,doc:u}),f=!0):this.Vo(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ao(u,a)>0||h&&this.Ao(u,h)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||h)&&(o=!0)),f&&(u?(r=r.add(u),s=d?s.add(t):s.delete(t)):(r=r.delete(t),s=s.delete(t)))})),Ar(this.query)||Cr(this.query))for(;r.size>this.query.limit;){const t=Ar(this.query)?r.last():r.first();r=r.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Ro:r,vo:n,Bn:o,mutatedKeys:s}}Vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const s=t.vo.no();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return rs()}};return n(t)-n(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t.type,e.type)||this.Ao(t.doc,e.doc))),this.So(n);const r=e?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==s.length||a?{snapshot:new ah(this.query,t.Ro,i,s,t.mutatedKeys,0===o,a,!1),Co:r}:{Co:r}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new oh,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach((t=>this.To=this.To.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.To=this.To.delete(t))),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=vo(),this.Ro.forEach((t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))}));const e=[];return t.forEach((t=>{this.Io.has(t)||e.push(new yh(t))})),this.Io.forEach((n=>{t.has(n)||e.push(new mh(n))})),e}ko(t){this.To=t.zn,this.Io=vo();const e=this.bo(t.documents);return this.applyChanges(e,!0)}xo(){return ah.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class wh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Eh{constructor(t){this.key=t,this.$o=!1}}class bh{constructor(t,e,n,i,s,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.Fo={},this.Oo=new ha((t=>kr(t)),_r),this.Mo=new Map,this.Lo=new Set,this.Bo=new ao(Bs.comparator),this.Uo=new Map,this.qo=new wa,this.Ko={},this.jo=new Map,this.Qo=oa.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function Th(t,e){const n=function(t){const e=as(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Mh.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ch.bind(null,e),e.Fo.Pr=dh.bind(null,e.eventManager),e.Fo.zo=fh.bind(null,e.eventManager),e}(t);let i,s;const r=n.Oo.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.xo();else{const t=await function(t,e){const n=as(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.He.getTargetData(t,e).next((s=>s?(i=s,Jo.resolve(i)):n.He.allocateTargetId(t).next((s=>(i=new ea(e,s,0,t.currentSequenceNumber),n.He.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.qn.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qn=n.qn.insert(t.targetId,t),n.Kn.set(e,t.targetId)),t}))}(n.localStore,Nr(e)),r=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,s=await async function(t,e,n,i){t.Go=(e,n,i)=>async function(t,e,n,i){let s=e.view.bo(n);s.Bn&&(s=await ya(t.localStore,e.query,!1).then((({documents:t})=>e.view.bo(t,s))));const r=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,r);return _h(t,e.targetId,o.Co),o.snapshot}(t,e,n,i);const s=await ya(t.localStore,e,!0),r=new vh(e,s.zn),o=r.bo(s.documents),a=To.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState),h=r.applyChanges(o,t.isPrimaryClient,a);_h(t,n,h.Co);const c=new wh(e,n,r);return t.Oo.set(e,c),t.Mo.has(n)?t.Mo.get(n).push(e):t.Mo.set(n,[e]),h.snapshot}(n,e,i,"current"===r),n.isPrimaryClient&&za(n.remoteStore,t)}return s}async function Ih(t,e){const n=as(t),i=n.Oo.get(e),s=n.Mo.get(i.targetId);if(s.length>1)return n.Mo.set(i.targetId,s.filter((t=>!_r(t,e)))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ma(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),$a(n.remoteStore,i.targetId),Dh(n,i.targetId)})).catch(aa)):(Dh(n,i.targetId),await ma(n.localStore,i.targetId,!0))}async function Sh(t,e){const n=as(t);try{const t=await ga(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.Uo.get(e);i&&(os(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.$o=!0:t.modifiedDocuments.size>0?os(i.$o):t.removedDocuments.size>0&&(os(i.$o),i.$o=!1))})),await Lh(n,t,e)}catch(t){await aa(t)}}function Ah(t,e,n){const i=as(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.Oo.forEach(((n,i)=>{const s=i.view.ro(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=as(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.ro(e)&&(i=!0)})),i&&ph(n)}(i.eventManager,e),t.length&&i.Fo.Pr(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Ch(t,e,n){const i=as(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Uo.get(e),r=s&&s.key;if(r){let t=new ao(Bs.comparator);t=t.insert(r,nr.newNoDocument(r,Ss.min()));const n=vo().add(r),s=new bo(Ss.min(),new Map,new uo(bs),t,n);await Sh(i,s),i.Bo=i.Bo.remove(r),i.Uo.delete(e),Rh(i)}else await ma(i.localStore,e,!1).then((()=>Dh(i,e,n))).catch(aa)}function Dh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Mo.get(e))t.Oo.delete(i),n&&t.Fo.zo(i,n);t.Mo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach((e=>{t.qo.containsKey(e)||Nh(t,e)}))}function Nh(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);null!==n&&($a(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),Rh(t))}function _h(t,e,n){for(const i of n)i instanceof mh?(t.qo.addReference(i.key,e),kh(t,i)):i instanceof yh?(es("SyncEngine","Document no longer in limbo: "+i.key),t.qo.removeReference(i.key,e),t.qo.containsKey(i.key)||Nh(t,i.key)):rs()}function kh(t,e){const n=e.key,i=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(i)||(es("SyncEngine","New document in limbo: "+n),t.Lo.add(i),Rh(t))}function Rh(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new Bs(Ns.fromString(e)),i=t.Qo.next();t.Uo.set(i,new Eh(n)),t.Bo=t.Bo.insert(n,i),za(t.remoteStore,new ea(Nr(Sr(n.path)),i,2,vs.I))}}async function Lh(t,e,n){const i=as(t),s=[],r=[],o=[];i.Oo.isEmpty()||(i.Oo.forEach(((t,a)=>{o.push(i.Go(a,e,n).then((t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=ua.$n(a.targetId,t);r.push(e)}})))})),await Promise.all(o),i.Fo.Pr(s),await async function(t,e){const n=as(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Jo.forEach(e,(e=>Jo.forEach(e.kn,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>Jo.forEach(e.xn,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!Zo(t))throw t;es("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.qn.get(e),i=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(i);n.qn=n.qn.insert(e,s)}}}(i.localStore,r))}async function Oh(t,e){const n=as(t);if(!n.currentUser.isEqual(e)){es("SyncEngine","User change. New user:",e.toKey());const t=await fa(n.localStore,e);n.currentUser=e,function(t,e){t.jo.forEach((t=>{t.forEach((t=>{t.reject(new cs(hs.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.jo.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Lh(n,t.Gn)}}function Mh(t,e){const n=as(t),i=n.Uo.get(e);if(i&&i.$o)return vo().add(i.key);{let t=vo();const i=n.Mo.get(e);if(!i)return t;for(const e of i){const i=n.Oo.get(e);t=t.unionWith(i.view.Po)}return t}}class Fh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=xa(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return function(t,e,n,i){return new da(t,e,n,i)}(this.persistence,new la,t.initialUser,this.k)}Yo(t){return new Aa(Da.ks,this.k)}Jo(t){return new _a}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ah(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Oh.bind(null,this.syncEngine),await async function(t,e){const n=as(t);e?(n.Gr.delete(2),await ja(n)):e||(n.Gr.add(2),await Ha(n),n.Jr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new ch}createDatastore(t){const e=xa(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Ma(i));var i;return function(t,e,n,i){return new Va(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,s=t=>Ah(this.syncEngine,t,0),r=Ra.bt()?new Ra:new ka,new Ba(e,n,i,s,r);var e,n,i,s,r}createSyncEngine(t,e){return function(t,e,n,i,s,r,o){const a=new bh(t,e,n,i,s,r);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=as(t);es("RemoteStore","RemoteStore shutting down."),e.Gr.add(5),await Ha(e),e.Hr.shutdown(),e.Jr.set("Unknown")}(this.remoteStore)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ph{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ea(this.observer.next,t)}error(t){this.observer.error?this.ea(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}na(){this.muted=!0}ea(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Uh{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Xi.UNAUTHENTICATED,this.clientId=Es.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{es("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(()=>Promise.resolve()))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new cs(hs.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new us;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=sh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Vh(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(es("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),es("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await fa(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new Fh)),t.offlineComponents}(t);es("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>async function(t,e){const n=as(t);n.asyncQueue.verifyOperationInProgress(),es("RemoteStore","RemoteStore received new credentials");const i=Ya(n);n.Gr.add(3),await Ha(n),i&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await ja(n)}(e.remoteStore,t))),t.onlineComponents=e}async function qh(t){const e=await async function(t){return t.onlineComponents||(es("FirestoreClient","Using default OnlineComponentProvider"),await Vh(t,new xh)),t.onlineComponents}(t),n=e.eventManager;return n.onListen=Th.bind(null,e.syncEngine),n.onUnlisten=Ih.bind(null,e.syncEngine),n}class Bh{constructor(t,e,n,i,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class jh{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof jh&&t.projectId===this.projectId&&t.database===this.database}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Hh=new Map;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function zh(t,e,n){if(!n)throw new cs(hs.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $h(t){if(!Bs.isDocumentKey(t))throw new cs(hs.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gh(t){if(Bs.isDocumentKey(t))throw new cs(hs.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new cs(hs.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=function(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":rs()}(t);throw new cs(hs.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Wh{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new cs(hs.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new cs(hs.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new cs(hs.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Qh{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wh({}),this._settingsFrozen=!1,t instanceof jh?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new cs(hs.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jh(t.options.projectId)}(t))}get app(){if(!this._app)throw new cs(hs.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new cs(hs.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wh(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ds;switch(t.type){case"gapi":const e=t.client;return os(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new gs(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new cs(hs.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Hh.get(t);e&&(es("ComponentProvider","Removing Datastore"),Hh.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Yh{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jh(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Yh(this.firestore,t,this._key)}}class Xh{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Xh(this.firestore,t,this._query)}}class Jh extends Xh{constructor(t,e,n){super(t,e,Sr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Yh(this.firestore,null,new Bs(t))}withConverter(t){return new Jh(this.firestore,t,this._path)}}function Zh(t,e,...n){if(t=p(t),1===arguments.length&&(e=Es.A()),zh("doc","path",e),t instanceof Qh){const i=Ns.fromString(e,...n);return $h(i),new Yh(t,null,new Bs(i))}{if(!(t instanceof Yh||t instanceof Jh))throw new cs(hs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ns.fromString(e,...n));return $h(i),new Yh(t.firestore,t instanceof Jh?t.converter:null,new Bs(i))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tc{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Pa(this,"async_queue_retry"),this.Ra=()=>{const t=Fa();t&&es("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=Fa();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pa(),this.ba(t)}enterRestrictedMode(t){if(!this.ya){this.ya=!0,this.Ia=t||!1;const e=Fa();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ra)}}enqueue(t){if(this.Pa(),this.ya)return new Promise((()=>{}));const e=new us;return this.ba((()=>this.ya&&this.Ia?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.ga.push(t),this.va())))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(t){if(!Zo(t))throw t;es("AsyncQueue","Operation failed with retryable error: "+t)}this.ga.length>0&&this.ur.Zi((()=>this.va()))}}ba(t){const e=this.ma.then((()=>(this.Ea=!0,t().catch((t=>{this.Ta=t,this.Ea=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t);throw ns("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ea=!1,t))))));return this.ma=e,e}enqueueAfterDelay(t,e,n){this.Pa(),this.Aa.indexOf(t)>-1&&(e=0);const i=ih.createAndSchedule(this,t,e,n,(t=>this.Va(t)));return this.pa.push(i),i}Pa(){this.Ta&&rs()}verifyOperationInProgress(){}async Sa(){let t;do{t=this.ma,await t}while(t!==this.ma)}Da(t){for(const e of this.pa)if(e.timerId===t)return!0;return!1}Ca(t){return this.Sa().then((()=>{this.pa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.pa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Sa()}))}Na(t){this.Aa.push(t)}Va(t){const e=this.pa.indexOf(t);this.pa.splice(e,1)}}function ec(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)}class nc extends Qh{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new tc,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||oc(this),this._firestoreClient.terminate()}}function ic(t,e){const n=F(t,"firestore");if(n.isInitialized()){const t=n.getImmediate();if(d(n.getOptions(),e))return t;throw new cs(hs.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==e.cacheSizeBytes&&-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new cs(hs.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e})}function sc(t=function(t="[DEFAULT]"){const e=R.get(t);if(!e)throw x.create("no-app",{appName:t});return e}()){return F(t,"firestore").getImmediate()}function rc(t){return t._firestoreClient||oc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function oc(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new Bh(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Uh(t._authCredentials,t._appCheckCredentials,t._queue,i)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ac{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new cs(hs.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ks(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new hc(Rs.fromBase64String(t))}catch(t){throw new cs(hs.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new hc(Rs.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new cs(hs.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new cs(hs.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return bs(this._lat,t._lat)||bs(this._long,t._long)}}const uc=new RegExp("[~\\*/\\[\\]]");function lc(t,e,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(r||o)&&(h+=" (found",r&&(h+=` in field ${i}`),o&&(h+=` in document ${s}`),h+=")"),new cs(hs.INVALID_ARGUMENT,a+t+h)
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class dc{constructor(t,e,n,i,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Yh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new fc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(pc("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class fc extends dc{data(){return super.data()}}function pc(t,e){return"string"==typeof e?function(t,e,n){if(e.search(uc)>=0)throw lc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ac(...e.split("."))._internalPath}catch(i){throw lc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e):e instanceof ac?e._internalPath:e._delegate._internalPath}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gc{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class mc extends dc{constructor(t,e,n,i,s,r){super(t,e,n,i,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new yc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(pc("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class yc extends mc{data(t={}){return super.data(t)}}class vc{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new gc(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new yc(this._firestore,this._userDataWriter,n.key,n,new gc(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new cs(hs.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new yc(t._firestore,t._userDataWriter,n.doc.key,n.doc,new gc(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new yc(t._firestore,t._userDataWriter,e.doc.key,e.doc,new gc(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,r=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:wc(e.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function wc(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return rs()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Ec(t){t=Kh(t,Yh);const e=Kh(t.firestore,nc);return function(t,e,n={}){const i=new us;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,s){const r=new Ph({next:r=>{e.enqueueAndForget((()=>lh(t,o)));const a=r.docs.has(n);!a&&r.fromCache?s.reject(new cs(hs.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?s.reject(new cs(hs.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:t=>s.reject(t)}),o=new gh(Sr(n.path),r,{includeMetadataChanges:!0,wo:!0});return uh(t,o)}(await qh(t),t.asyncQueue,e,n,i))),i.promise}(rc(e),t._key).then((n=>Ic(e,t,n)))}class bc extends
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class{convertValue(t,e="none"){switch(js(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ms(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Fs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw rs()}}convertObject(t,e){const n={};return Cs(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new cc(Ms(t.latitude),Ms(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ps(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Us(t));default:return null}}convertTimestamp(t){const e=Os(t);return new Is(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ns.fromString(t);os(Xo(n));const i=new jh(n.get(1),n.get(3)),s=new Bs(n.popFirst(5));return i.isEqual(e)||ns(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new hc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Yh(this.firestore,null,e)}}function Tc(t,...e){var n,i,s;t=p(t);let r={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||ec(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(ec(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(i=t.error)||void 0===i?void 0:i.bind(t),e[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let h,c,u;if(t instanceof Yh)c=Kh(t.firestore,nc),u=Sr(t._key.path),h={next:n=>{e[o]&&e[o](Ic(c,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Kh(t,Xh);c=Kh(n.firestore,nc),u=n._query;const i=new bc(c);h={next:t=>{e[o]&&e[o](new vc(c,i,n,t))},error:e[o+1],complete:e[o+2]},function(t){if(Cr(t)&&0===t.explicitOrderBy.length)throw new cs(hs.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query)}return function(t,e,n,i){const s=new Ph(i),r=new gh(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>uh(await qh(t),r))),()=>{s.na(),t.asyncQueue.enqueueAndForget((async()=>lh(await qh(t),r)))}}(rc(c),u,a,h)}function Ic(t,e,n){const i=n.docs.get(e._key),s=new bc(t);return new mc(t,s,e._key,i,new gc(n.hasPendingWrites,n.fromCache),e.converter)}!function(t,e=!0){Ji="9.6.1",M(new g("firestore",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=new nc(i,new fs(t.getProvider("auth-internal")),new ys(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),U(Yi,"3.4.1",t),U(Yi,"3.4.1","esm2017")}();var Sc=function(){function e(t,e,n){this.streamStartTime=void 0,this.nearestUpcomingEvent=void 0,this.upcomingEvents=void 0,this.player_=e,this.spoilerFlag_=t,this.logger_=n}return e.prototype.eventMetadata=function(t){t.scheduledStart&&(this.streamStartTime=new Date(t.scheduledStart).getTime()/1e3),this.player_.send(n.StreamTimelineEvent.GAME_INFO,n.Action.NONE,t)},e.prototype.eventReceived=function(e,n,i){if(this.shouldDispatchImmediately(e,n))this.sendEvent(i,e);else switch(e){case t.ChangeType.ADDED:case t.ChangeType.MODIFIED:this.addToUpcomingEvents(n,i);break;case t.ChangeType.DELETED:this.removeFromUpcomingEventsFromDocumentId(n)}},e.prototype.updatePlayer=function(t){this.player_=t,this.addPeriodicTimeObserver()},e.prototype.shouldDispatchImmediately=function(e,n){if(this.spoilerFlag_)return!0;switch(e){case t.ChangeType.ADDED:var i=this.getEpoch(n);return i>=0&&this.canSendEvent(i);case t.ChangeType.MODIFIED:case t.ChangeType.DELETED:return!this.upcomingEvents||!this.upcomingEvents.has(n)}return!1},e.prototype.addPeriodicTimeObserver=function(){var t=this;this.timeObserverToken||(this.timeObserverToken=setInterval((function(){var e=t.fetchUnDispatchedEligibleEvents();e&&e.size>0&&t.sendEventsFromList(e)}),1e3))},e.prototype.removePeriodicTimeObserver=function(){this.timeObserverToken&&(clearInterval(this.timeObserverToken),this.timeObserverToken=void 0)},e.prototype.shouldDispatchFutureEvent=function(){return!!this.nearestUpcomingEvent&&this.canSendEvent(this.nearestUpcomingEvent)},e.prototype.fetchUnDispatchedEligibleEvents=function(){var t=this;if(!this.shouldDispatchFutureEvent())return null;if(this.player_.playerState===n.PLAYBACK_STATES.IDLE)return this.removePeriodicTimeObserver(),null;var e=new Map;return this.upcomingEvents&&Array.from(this.upcomingEvents.keys()).forEach((function(n){var i,s=t.getEpoch(n);t.canSendEvent(s)&&e.set(n,null===(i=t.upcomingEvents)||void 0===i?void 0:i.get(n))})),e},e.prototype.canSendEvent=function(t){return(this.player_.isLive?this.player_.currentEpochTime:this.getComputedEpoch(this.player_.currentTime))>=t},e.prototype.sendEventsFromList=function(e){var n=this;e.forEach((function(e){n.sendEvent(e,t.ChangeType.ADDED)})),this.removeFromUpcomingEventsFromDocumentMap(e)},e.prototype.sendEvent=function(t,e){this.logger_.debug("[STREAM_TIMELINE] Dispatching "+e+" event",t),this.player_.send(n.StreamTimelineEvent.GAME_EVENT,n.Action.NONE,this.composeMetadata(t,e))},e.prototype.addToUpcomingEvents=function(t,e){this.upcomingEvents||(this.upcomingEvents=new Map),this.upcomingEvents.set(t,e),this.updateNearestFutureEvent(t),this.addPeriodicTimeObserver()},e.prototype.removeFromUpcomingEventsFromDocumentId=function(t){var e,n;null===(e=this.upcomingEvents)||void 0===e||e.delete(t),0===(null===(n=this.upcomingEvents)||void 0===n?void 0:n.size)&&this.removePeriodicTimeObserver(),this.updateNearestFutureEventFromUnsentEvents()},e.prototype.removeFromUpcomingEventsFromDocumentMap=function(t){var e,n=this;Array.from(t.keys()).forEach((function(t){var e;null===(e=n.upcomingEvents)||void 0===e||e.delete(t)})),0===(null===(e=this.upcomingEvents)||void 0===e?void 0:e.size)&&this.removePeriodicTimeObserver(),this.updateNearestFutureEventFromUnsentEvents()},e.prototype.updateNearestFutureEvent=function(t){var e=this.getEpoch(t);e=isNaN(e)?void 0:e,this.nearestUpcomingEvent?e&&e<this.nearestUpcomingEvent&&(this.nearestUpcomingEvent=e):this.nearestUpcomingEvent=e},e.prototype.updateNearestFutureEventFromUnsentEvents=function(){var t=this;this.nearestUpcomingEvent=void 0,this.upcomingEvents&&Array.from(this.upcomingEvents.keys()).forEach((function(e){t.updateNearestFutureEvent(e)}))},e.prototype.composeMetadata=function(t,e){return{eventMetadata:t,type:e}},e.prototype.getComputedEpoch=function(t){return this.streamStartTime?this.streamStartTime+t:t},e.prototype.getEpoch=function(t){return new Date(t).getTime()/1e3},e}(),Ac=Object.freeze({SESSION_INIT_FAILURE:1793}),Cc=function(){function n(t,n,r){var o=this;this.configuration=t,this.gameInfo_=void 0,this.gameMetadataDeferred_=new e.UtilFactory.Deferred,this.gameEventDeferred_=new e.UtilFactory.Deferred,this.documentDeferred=new e.UtilFactory.Deferred,this.eventInfoConverter={toFirestore:function(t){return t},fromFirestore:function(t){return t.data()}},this.isDocumentExists=function(t,e){return i(o,void 0,void 0,(function(){return s(this,(function(n){switch(n.label){case 0:return this.db?[3,1]:(this.logger.warn("Firestore not set"),this.documentDeferred.resolve(!1),[3,3]);case 1:return[4,Ec(Zh(this.db,t,e))];case 2:n.sent().exists()||this.documentDeferred.resolve(!1),this.documentDeferred.resolve(!0),n.label=3;case 3:return[2,this.documentDeferred.promise]}}))}))},this.createSessionError=function(t){return e.createError(Ac.SESSION_INIT_FAILURE|e.ErrorCodes.ERROR_CATEGORY_MASK_THIRDPARTY,t.message,void 0,JSON.stringify(t))},this.logger=r||e.createLogger(e.LoggerLevel.OFF,"FL_STREAM_TIMELINE"),this.gameMetadataDeferred_=new e.UtilFactory.Deferred,this.gameEventDeferred_=new e.UtilFactory.Deferred,this.documentDeferred=new e.UtilFactory.Deferred,this.eventDispatcher=new Sc(this.configuration.spoiler,n,this.logger),this.player_=n,this.initializeFirebase(),this.setupPlayerListeners()}return Object.defineProperty(n.prototype,"gameInfo",{get:function(){return this.gameInfo_},enumerable:!1,configurable:!0}),n.prototype.publishEvent=function(t,e,n){var i;null===(i=this.eventDispatcher)||void 0===i||i.eventReceived(t,e,n)},n.prototype.publishGameInfo=function(t){var e;this.gameInfo_=t,null===(e=this.eventDispatcher)||void 0===e||e.eventMetadata(t)},n.prototype.initializeFirebase=function(){try{this.firebaseApp=function(t,e={}){"object"!=typeof e&&(e={name:e});const n=Object.assign({name:_,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!=typeof i||!i)throw x.create("bad-app-name",{appName:String(i)});const s=R.get(i);if(s){if(d(t,s.options)&&d(n,s.config))return s;throw x.create("duplicate-app",{appName:i})}const r=new v(i);for(const t of L.values())r.addComponent(t);const o=new P(t,n,r);return R.set(i,o),o}(this.configuration.firebaseConfig),this.configuration.firestoreSettings?ic(this.firebaseApp,this.configuration.firestoreSettings):ic(this.firebaseApp,{experimentalAutoDetectLongPolling:!0,useFetchStreams:!1}),this.db=sc(this.firebaseApp)}catch(t){this.db=void 0}this.db||this.logger.warn("Could not set Firestore")},n.prototype.unsubscribeFirebaseListeners=function(){this.unsubscribeFromEvents(),this.unsubscribeFromGameMetadata()},n.prototype.setupPlayerListeners=function(){var t=this;this.player_&&this.player_.subscribe("error",(function(){t.unsubscribeFirebaseListeners()}))},n.prototype.destroyPlayerListeners=function(){this.player_&&this.player_.unsubscribe("error")},n.prototype.exists=function(t,e){return this.isDocumentExists(t,e)},n.prototype.subscribeToEvents=function(t,e,n){var i=this;return this.db?this.eventsUnsubscribe=Tc(function(t,...e){for(const n of e)t=n._apply(t);return t}(function(t,e,...n){if(t=p(t),zh("collection","path",e),t instanceof Qh){const i=Ns.fromString(e,...n);return Gh(i),new Jh(t,null,i)}{if(!(t instanceof Yh||t instanceof Jh))throw new cs(hs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ns.fromString(e,...n));return Gh(i),new Jh(t.firestore,null,i)}}(this.db,t,e,n)),(function(t){i.gameMetadataDeferred_.resolve(void 0),t.docChanges().forEach((function(t){i.logger.debug("Document changed",t.doc.data()),i.publishEvent(i.getChangeType(t.type),t.doc.id,t.doc.data())}))}),(function(t){i.logger.error("Error fetching documents for stream timeline events",t),i.gameMetadataDeferred_.reject(i.createSessionError(t))})):(this.logger.warn("Firestore not set"),this.gameMetadataDeferred_.resolve(void 0)),this.gameMetadataDeferred_.promise},n.prototype.subscribeToGameMetadata=function(t,e){var n=this;return this.db?this.gameMetadataUnsubscribe=Tc(Zh(this.db,t,e).withConverter(this.eventInfoConverter),(function(t){var e=t.data();e?n.publishGameInfo(e):n.logger.warn("scheduledStart not available in metadata"),n.gameEventDeferred_.resolve(void 0)}),(function(t){n.logger.error("Error subscribing to game info",t),n.gameEventDeferred_.reject(n.createSessionError(t))})):(this.logger.warn("Firestore not set"),this.gameEventDeferred_.resolve(void 0)),this.gameEventDeferred_.promise},n.prototype.getChangeType=function(e){switch(e){case"added":return t.ChangeType.ADDED;case"modified":return t.ChangeType.MODIFIED;case"removed":return t.ChangeType.DELETED;default:return t.ChangeType.UNKNOWN}},n.prototype.unsubscribeFromEvents=function(){this.eventsUnsubscribe&&(this.eventsUnsubscribe(),this.eventsUnsubscribe=void 0)},n.prototype.unsubscribeFromGameMetadata=function(){this.gameMetadataUnsubscribe&&(this.gameMetadataUnsubscribe(),this.gameMetadataUnsubscribe=void 0)},n.prototype.updatePlayer=function(t){var e;this.destroyPlayerListeners(),this.player_=t,null===(e=this.eventDispatcher)||void 0===e||e.updatePlayer(t)},n}();return t.createStreamTimelineManager=function(t,e,n){var i=new Cc(t,e,n);return new o(t,i,n)},t.version="7.0.56",Object.defineProperty(t,"__esModule",{value:!0}),t}({},flFoundation,flPlayerInterface);

