a=_=>({i:[],o:[]});r=_=>Math.random();c=(f,t)=>({f:f,t:t,w:r(),c:0});
$=x=>x.length;co=n=>{for(l=0;++l<$(n.l);)for(i=-1;++i<$(n.l[l-1]);)
for(j=0;j<$(n.l[l]);++j){cn=c(n.l[l-1][i],n.l[l][j]);n.l[l-1][i].o.
push(cn);n.l[l][j].i.push(cn)}return n};rb=_=>r()-.5;_=(l,r,m)=>co({l
:(([f,...r])=>[f,...r.map(q=>q.map(n=>(n.b=rb(),n)))])(l.map(x=>Array
.from({length:x},a))),r:r,m:m});s=x=>1/(1+Math.exp(-x));w=(n,k)=>{n.l
[0]=n.l[0].map((n,i)=>(n.v=k[i],n));for(l=0;++l<$(n.l);)for(m=-1;++m<
$(n.l[l]);){x=n.l[l][m];n.l[l][m].v=s(x.i.reduce((z,v)=>z+v.w*v.f.v,0)
+x.b)}return{n:n,o:n.l[$(n.l)-1].map(t=>t.v)}};ds=(n,t)=>{for(l=$(n.l)
;--l>=0;)for(z=0;z<$(n.l[l]);++z){p=n.l[l][z];e=l==$(n.l)-1?t[z]-p.v:0
;for(o of p.o)e+=o.t.d*o.w;n.l[l][z].e=e;n.l[l][z].d=e*p.v*(1-p.v)}for
(l=0;l<$(n.l);++l)for(z=0;z<$(n.l[l]);++z){p=n.l[l][z];d=p.d;for(i=-1;
++i<$(p.i);){b=p.i[i];v=n.r*d*b.f.v+n.m*b.c;b.c=v;b.w+=v;n.l[l][z].i
[i]=b}n.l[l][z].b+=n.r*d}return n};g=(n,d,j)=>{for(u=-1;++u<j;)y=d[(r
()*$(d))|0],n=ds(w(n,y.i).n,y.e);return n},h=(n,i)=>w(n,i).o
