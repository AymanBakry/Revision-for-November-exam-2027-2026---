/* ====== إعدادات المعلم ====== */
// ضع هنا رابط Google Apps Script. اتركه فارغًا لتفعيل النسخ/التحميل فقط.
const SUBMIT_URL="";
const TITLE="Revision for Test Two 2026-2027";

/* ====== الأسئلة ====== */
const M=(q,o,a)=>({t:"m",q,o,a});
const T=(q,g)=>({t:"w",q,g});
const S1=[
["We can protect ourselves against viruses by getting ____.",["positive","survive","vaccinations"],"vaccinations"],
["Bacteria help us ____ food and feel our emotions.",["eat","swallow","digest"],"digest"],
["Some symptoms of a cold are a ____ throat and sneezing.",["sore","sour","sure"],"sore"],
["Adopting a healthy ____ is the top secret to be physically fit.",["lifelong","lifestyle","life learning"],"lifestyle"],
["People take ____ to treat bacterial infections.",["rest","holiday","antibiotics"],"antibiotics"],
["Viruses can ____ when you touch a person who has a virus.",["spread","spray","digest"],"spread"],
["When we sleep ____, we can get ill.",["well","poorly","enough"],"poorly"],
["Most mammals ____ need a good night’s sleep.",["never","usually","rarely"],"usually"],
["Smoking has a bad ____ on health.",["effect","perfect","defect"],"effect"],
["Players ____ real-world when they play video games.",["experience","don’t experience","experts"],"experience"],
["The ____ system is the body’s defence against illness.",["immune","cooling","breathing"],"immune"],
["It’s important to stay ____ when we are ill.",["moderate","negative","positive"],"positive"],
["Viruses make people ____.",["healthy","ill","happy"],"ill"],
["When you sleep, your body produces ____ to fight infections.",["crops","cells","goods"],"cells"],
["It always ____ me so happy to visit my grandparents.",["make","makes","making"],"makes"],
["Stress can make you feel nervous, but it can also keep you ____.",["focused","sleepy","happy"],"focused"],
["He is often ill. His immune system isn't ____.",["weak","strong","bad"],"strong"],
["Everyone should have ____ exercises to be physically fit.",["interrupted","little","regular"],"regular"],
["If we sleep ____, we’ll stay healthier.",["shortly","enough","poorly"],"enough"],
["What is your ____ about the new car?",["opinion","communicate","media"],"opinion"],
["Healthy habits ____ a person fit and extend life.",["make","makes","making"],"make"],
["You ____ write anything you will regret on social media.",["shouldn’t","should","must"],"shouldn’t"],
["Some ____ of a cold are a sore throat and sneezing.",["symptoms","sections","options"],"symptoms"],
["Good health has a direct ____ on our personality.",["impact","way","compact"],"impact"],
["Video games can treat ____ problems.",["vision","hearing","smelling"],"vision"],
["Health is more valuable if ____ to wealth.",["remembered","compared","caught"],"compared"],
["We ____ the food in our stomach.",["cook","eat","digest"],"digest"],
["The fit ____ is always in a fit body.",["mind","side","hide"],"mind"],
["Bacteria can ____ inside and outside of the body.",["positive","survive","digest"],"survive"],
["Waking up ____ helps to keep our body energetic and refresh our mind.",["late","early","rarely"],"early"],
["When people feel ill, they may be fighting a ____.",["digest","disease","emotions"],"disease"],
["Having a balanced diet throughout the day is ____ for a good lifestyle.",["fatal","virus","vital"],"vital"]
].map(x=>M(...x));

const BLOG="Some of you may have noticed that we want to repaint the school’s art room. Mr Lee says he trusts us and gives the students full control. Jake and I started a committee. As leaders of the committee, we are nervous. We will make the final decision, but want to hear from the whole student body. So far, some of the students say they like the room as it is. They like the bright colours and the fun photographs. But many others say we need a new look. A common idea among several students is to paint a mural. Everyone can help. The question is, ‘What will the mural be?’ Another suggestion is that students enter design ideas into a contest. The winner will design the large side wall. And the runner-up will decorate the smaller front and back walls. So, what will we do? Leave the art room as it is? Paint a mural? Create a contest in which the winners design the walls? Or something else?";
const CAMEL="The camel is the largest {1} in the desert. Its thick fur protects it from the {2} of the desert. Its big feet enable it to {3} on the loose sand. It is between 180–200cm tall and weighs between 450 and 690 kg. Camels can {4} up to 57 liters of water at one time and can travel many kilometers without water. Their bodies can store food so they can {5} for a long time without eating.";
const STRESS="Stress isn't only something negative, but it can have many good things for the {1} and mind. For example, some students have {2} before a big test. The stress might {3} them, but it also makes them feel focused. This type of stress can help people work hard to meet their goals. Stress also keeps us healthy. Scientists said that a little stress is good for the {4} system. It protects you from infection better. The final way is that stress helps us {5} to danger. If you see a car coming too {6}, you might have stress to act quickly. Without the stress, you may not be able to jump {7} of the car’s way. On the other hand, stress can cause difficulties in breathing. Too much stress is harmful to our bodies and minds. But the right amount of stress makes us more {8}, healthier and safe.";

const SECS=[
{n:"المستوى 1 · Vocabulary & Grammar Quest",items:S1},
{n:"المستوى 2 · Blog Detective",p:BLOG,items:[
 T("What does Mr Lee give to the students?",[["full"],["control"]]),
 T("What do some of the students say?",[["like","bright","colours","colors","photographs","room"]]),
 T("What will the runner-up do?",[["decorate","decorates"],["smaller","front","back","walls"]]),
 M("The winner will design the ____ side wall.",["small","large","easy"],"large"),
 M("The runner-up will decorate the smaller front and ____ walls.",["big","side","back"],"back")]},
{n:"المستوى 3 · Camel Cloze",p:CAMEL,items:[
 ["animal","bird","insect"],["coldness","heat","ice"],["walks","walking","walk"],["drink","eat","run"],["goes","going","go"]
 ].map((o,i)=>({...M("Blank ("+(i+1)+")",o,["animal","heat","walk","drink","go"][i]),b:i+1}))},
{n:"المستوى 4 · Stress Cloze",p:STRESS,items:[
 ["hands","family","body","legs"],["stress","stairs","steers","stars"],["hurry","sorry","worry","lorry"],["inner","immune","lunar","solar"],
 ["sing","react","run","refer"],["fast","slow","toy","carry"],["over","in","into","out"],["honey","focused","money","funny"]
 ].map((o,i)=>({...M("Blank ("+(i+1)+")",o,["body","stress","worry","immune","react","fast","out","focused"][i]),b:i+1}))}
];
const REPORT="Write a report about the effects of stress (Heading · Introduction · Effects on our body · Effects on our mind · Conclusion)";

/* ====== المحرك ====== */
const steps=[];SECS.forEach((s,si)=>s.items.forEach(it=>steps.push({...it,s:si})));
const TOTAL=steps.length; // 50
const shuf=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
steps.forEach(s=>{if(s.t=="m")s.o=shuf(s.o)});
const $=document.getElementById("app");
let st={seat:"",name:"",i:0,ans:{},rep:""};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const norm=s=>(s||"").toLowerCase().replace(/[’']/g,"'").replace(/[^a-z' ]/g," ");

const sc=(c,a)=>`<div class="sc ${c}">${a.map((e,i)=>`<span style="animation-delay:${i*.35}s">${e}</span>`).join("")}</div>`;
const SCN=[sc("s1",["🦠","💉","🛌","🥦","🏃‍♂️","🧼"]),sc("s2",["🏫","🎨","🖌️","🖼️","🏆"]),sc("s3",["☀️","🐪","🌵","🏜️","💧"]),sc("s4",["🧠","😰","⚡","📚","🧘‍♂️"]),sc("s5",["📝","🧠","🫀","✅"])];
function start(){
 document.body.classList.remove("play");
 $.innerHTML=`<div class="card"><h1>🎮 ${TITLE}</h1><p class="mu">أدخل رقم الجلوس الخاص بك للدخول، ثم أجب عن ${TOTAL} سؤالًا في 4 مستويات + تقرير كتابي. ستظهر درجتك بعد التسليم وتُسجَّل باسمك.</p>
 <input id="sn" class="en" inputmode="numeric" placeholder="رقم الجلوس / Seat Number" oninput="chk()">
 <div id="wl" class="wl"></div>
 <p><button class="btn" id="gb" onclick="go()" disabled>ابدأ اللعب 🚀</button></p></div>`;
}
function chk(){
 const v=document.getElementById("sn").value.trim(),n=STU[v];
 document.getElementById("wl").innerHTML=n?`✅ أهلًا بك يا <b>${esc(n)}</b>`:(v.length>=9?"❌ رقم الجلوس غير موجود، تأكد منه":"");
 document.getElementById("gb").disabled=!n;st.seat=n?v:"";
}
function go(){
 if(!STU[st.seat])return;
 st.name=STU[st.seat];st.i=0;st.ans={};st.rep="";draw();
}
function draw(){
 document.body.classList.add("play");
 const q=steps[st.i],sec=SECS[q.s],done=Object.keys(st.ans).filter(k=>st.ans[k]).length;
 let p="";
 if(sec.p)p=`<div class="ps">${sec.p.replace(/\{(\d)\}/g,(m,n)=>`<span class="b ${q.b==n?"cur":""}">(${n})</span>`)}</div>`;
 let body;
 if(q.t=="m")body=q.o.map(o=>`<button class="opt ${st.ans[st.i]==o?"sel":""}" onclick="pick(${JSON.stringify(o).replace(/"/g,"&quot;")})">${esc(o)}</button>`).join("");
 else body=`<input class="en" id="tx" placeholder="Type your answer..." value="${esc(st.ans[st.i]||"")}" oninput="st.ans[st.i]=this.value">`;
 const last=st.i==TOTAL-1;
 $.innerHTML=`<div class="top"><span>⭐ ${done}/${TOTAL}</span><span>${st.name}</span></div>
 <div class="bar"><i style="width:${done/TOTAL*100}%"></i></div><br>
 <div class="card">${SCN[q.s]}<span class="lv">${sec.n}</span>${p}<div class="q">${st.i+1}. ${esc(q.q)}</div>${body}
 <div class="nav"><button class="btn g" onclick="mv(-1)" ${st.i?"":"disabled"}>→ السابق</button>
 ${last?`<button class="btn" onclick="rep()">التقرير الكتابي ✍️</button>`:`<button class="btn" onclick="mv(1)">التالي ←</button>`}</div></div>
 <p class="mu" style="text-align:center">يمكنك الرجوع وتعديل إجاباتك قبل التسليم</p>`;
}
function pick(o){st.ans[st.i]=o;draw()}
function mv(d){st.i=Math.max(0,Math.min(TOTAL-1,st.i+d));draw()}
function rep(){
 $.innerHTML=`<div class="card">${SCN[4]}<span class="lv">المستوى 5 · Report Writing</span><div class="q">${REPORT}</div>
 <textarea class="en" id="rp" rows="12" placeholder="Heading&#10;Introduction...&#10;Effects on our body...&#10;Effects on our mind...&#10;Conclusion...">${esc(st.rep)}</textarea>
 <p class="mu">هذا السؤال يصححه المعلم يدويًا ولا يدخل في الدرجة التلقائية.</p>
 <div class="nav"><button class="btn g" onclick="st.rep=document.getElementById('rp').value;draw()">→ رجوع</button>
 <button class="btn" onclick="st.rep=document.getElementById('rp').value;finish()">إنهاء وعرض الدرجة ✅</button></div></div>`;
}
function ok(q,a){
 if(!a)return false;
 if(q.t=="m")return a==q.a;
 const w=norm(a).split(/\s+/);return q.g.every(g=>g.some(k=>w.includes(k)));
}
function finish(){
 document.body.classList.remove("play");
 const wrong=[];let sc=0;
 steps.forEach((q,i)=>{if(ok(q,st.ans[i]))sc++;else wrong.push({n:i+1,q:q.q,y:st.ans[i]||"—",c:q.t=="m"?q.a:q.g.map(g=>g[0]).join(" + ")+" (keywords)"})});
 st.sc=sc;st.wrong=wrong;
 const pc=Math.round(sc/TOTAL*100),stars=pc>=90?3:pc>=70?2:pc>=50?1:0;
 const msg=pc>=90?"ممتاز! أنت بطل المراجعة 🏆":pc>=70?"عمل رائع! 👏":pc>=50?"جيد، راجع أخطاءك وحاول مجددًا 💪":"لا تيأس! راجع الدرس وأعد المحاولة 📚";
 $.innerHTML=`<div class="card"><h1 style="text-align:center">النتيجة النهائية</h1>
 <div class="st">${"⭐".repeat(stars)}${"☆".repeat(3-stars)}</div>
 <div class="big">${sc} / ${TOTAL}</div><p style="text-align:center;font-size:18px">${pc}% — ${msg}</p>
 <p class="mu" style="text-align:center">${esc(st.name)} · ${st.seat}</p>
 <p style="text-align:center"><button class="btn" id="sb" onclick="sub()">📨 تسليم الإجابات</button>
 <button class="btn g" onclick="cp()">📋 نسخ النتيجة</button>
 <button class="btn g" onclick="dl()">⬇️ تحميل</button></p><p id="ms" class="mu" style="text-align:center"></p></div>
 <div class="card"><h3>مراجعة الأخطاء (${wrong.length})</h3>${wrong.map(w=>`<div class="rv">${w.n}. ${esc(w.q)}<br>Your answer: ${esc(w.y)} · Correct: <b>${esc(w.c)}</b></div>`).join("")||"<p>لا توجد أخطاء! 🎉</p>"}
 <button class="btn g" onclick="st={seat:'',name:'',i:0,ans:{},rep:''};start()">🔄 إعادة المحاولة</button></div>`;
}
function payload(){return{seat:st.seat,name:st.name,score:st.sc,total:TOTAL,percent:Math.round(st.sc/TOTAL*100),time:new Date().toLocaleString(),mistakes:st.wrong.map(w=>w.n).join(","),report:st.rep}}
function txt(){const p=payload();return`${TITLE}\nSeat: ${p.seat}\nName: ${p.name}\nScore: ${p.score}/${p.total} (${p.percent}%)\nWrong Qs: ${p.mistakes||"none"}\nDate: ${p.time}\n\nReport:\n${p.report||"(empty)"}`}
async function sub(){
 const m=document.getElementById("ms"),b=document.getElementById("sb");
 if(!SUBMIT_URL){m.textContent="لم يتم ربط البوابة بعد — استخدم «نسخ النتيجة» أو «تحميل» وأرسلها لمعلمك.";return}
 b.disabled=true;
 try{await fetch(SUBMIT_URL,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify(payload())});m.textContent="✅ تم التسليم بنجاح!"}
 catch(e){b.disabled=false;m.textContent="تعذر التسليم، تحقق من الاتصال أو انسخ النتيجة."}
}
function cp(){navigator.clipboard.writeText(txt()).then(()=>document.getElementById("ms").textContent="تم النسخ ✅").catch(()=>document.getElementById("ms").textContent="تعذر النسخ، استخدم التحميل.")}
function dl(){const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([txt()],{type:"text/plain;charset=utf-8"}));a.download=(st.name||"result")+".txt";a.click()}
start();
