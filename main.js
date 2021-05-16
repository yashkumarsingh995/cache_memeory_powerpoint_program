var count=0;

var colors=["lightpink","orange","lightyellow","lightgreen","lightblue"];

var L_color=["red","brown","darkgreen"];

var text=["REGISTER MEMORY","CACHE MEMORY","MAIN MEMORY","SECONDARY MEMORY","I/O DEVICES"];

var L_arr=["L1 Cache","L2 Cache","L3 Cache"];

var buttons=[];
var lc_arr=[];


function create_structure(colors)
{
 
  var container=document.getElementById('container');
  var array=[];
//  var buttons=[];

  var box=document.createElement('div');
  box.id="box";
  for(let i=0;i<5;i++)
{
    var cell=document.createElement('div');
    cell.setAttribute('id',i);
    cell.className='cell';
    cell.style.width=`${120*(i+1)}px`;
    cell.style.height=`${40*(i+1)}px`;
    cell.style.backgroundColor=colors[i];
    cell.style.fontSize=`${20+5*i}px`;
    cell.innerText=text[i];
    array.push(cell.id);
    box.appendChild(cell);
}

  container.appendChild(box);

}
create_structure(colors);



function start()
{ 
  if(count==0)
  {
    var cache = document.getElementById('1');
    cache.className = "cache";
    cache.style.width = "60vw";
    cache.style.height= "10vh";
    cache.style.borderTopLeftRadius = "19px";
    cache.style.borderTopRightRadius = "19px";
    cache.innerText=" CACHE MEMORY \nCache memory is placed between the CPU and the main memory.       ";
    cache.style.transition = ".7s";
  }
  else if(count==1)
  {
    var cache = document.getElementById('1');
    cache.className = "cache";
    cache.style.width = "100vw";
    cache.style.height= "30vh";
    cache.style.borderTopLeftRadius = "19px";
    cache.style.borderTopRightRadius = "19px";
    cache.style.fontSize="45px";
    cache.innerText=" CACHE MEMORY\n Cache memory is fast and expensive. Traditionally, it is categorized as 'levels' that describe its closeness and accessibility to the microprocessor. There are three general cache level.:  ";
    cache.style.transition = ".7s";
  }
  else if(count==2)
 {
  var cache=document.getElementById('1');
  cache.className="cache";
  cache.style.height="350px";
  cache.style.width="250px"
  cache.style.borderTopLeftRadius="19px";
  cache.style.borderTopRightRadius="19px";
  cache.innerText=" ";
  cache.style.transition=".7s";
  var cache_temp=document.createElement('div');
  for(let i=0;i<3;i++)
  {
    var L_cache=document.createElement('div');
    L_cache.setAttribute("id",5+i);
    lc_arr.push(L_cache.id);
    L_cache.className="lcache";
    L_cache.style.backgroundColor=L_color[i];
    L_cache.innerText=L_arr[i];
    cache_temp.appendChild(L_cache);
    console.log('hii');
  }
  cache.appendChild(cache_temp);
 }
 
 else if(count==3)
 {   var cache = document.getElementById('1');
     cache.className = "cache";
     cache.style.height = "60vh";
     cache.style.width= "100vw";
     cache.style.borderRadius = "19px";
     cache.style.transition = ".7s";
     cache.style.position="absolute";
    for (let i = 0; i < 3; i++)
    {
      var L_cache_x = document.getElementById(`${5+i}`);
      
      L_cache_x.innerText=L_arr[i];
      L_cache_x.style.width=`${15+(20*i)}vw`;
      L_cache_x.style.height=`${5+(10*i)}vh`;
      L_cache_x.style.transition=`${.5*(i+1)}s`;
      
    }
  
 }
 
 else if(count==4)
 {
   var L_cache_x_1=document.getElementById('5');
   var L_cache_x_2=document.getElementById('6');
   var L_cache_x_3=document.getElementById('7');
   L_cache_x_2.style.display="none";
   L_cache_x_3.style.display="none";
   L_cache_x_1.style.width="80vw";
   L_cache_x_1.style.height="40vh";
   L_cache_x_1.style.fontSize="45px";
   L_cache_x_1.innerText= " L1 CACHE \n   L1 cache, or primary cache, is extremely fast but relatively small, and is usually embedded in the processor chip as CPU cache.  ";
   L_cache_x_1.style.transition=".8s";
 }
 
 else if(count==5)
 {
  var L_cache_x_1 = document.getElementById('5');
  var L_cache_x_2 = document.getElementById('6');
  var L_cache_x_3 = document.getElementById('7');
  L_cache_x_2.style.display="block";
  L_cache_x_1.style.display = "none";
  L_cache_x_3.style.display = "none";
  L_cache_x_2.style.width = "80vw";
  L_cache_x_2.style.height = "40vh";
  L_cache_x_2.style.fontSize="45px";
  L_cache_x_2.innerText="  L2 CAHCE\n L2 cache, or secondary cache, is often more capacious than L1. L2 cache may be embedded on the CPU, or it can be on a separate chip or coprocessor and have a high-speed alternative system bus connecting the cache and CPU. That way it doesn't get slowed by traffic on the main system bus.    ";
  
  L_cache_x_2.style.transition = ".8s";
 }
 
 else if(count==6)
 {
   var L_cache_x_1 = document.getElementById('5');
   var L_cache_x_2 = document.getElementById('6');
   var L_cache_x_3 = document.getElementById('7');
   L_cache_x_3.style.display = "block";
   L_cache_x_1.style.display = "none";
   L_cache_x_2.style.display = "none";
   L_cache_x_3.style.width = "80vw";
   L_cache_x_3.style.height = "40vh";
   L_cache_x_3.style.fontSize="45px";
   L_cache_x_3.innerText="L3 CACHE\n Level 3 (L3) cache is specialized memory developed to improve the performance of L1 and L2. L1 or L2 can be significantly faster than L3, though L3 is usually double the speed of DRAM. With multicore processors, each core can have dedicated L1 and L2 cache, but they can share an L3 cache. If an L3 cache references an instruction, it is usually elevated to a higher level of cache.     ";
   L_cache_x_3.style.transition = ".8s";
   
 }
 
 else if(count==7)
 {
   var L_cache_x_1 = document.getElementById('5');
   var L_cache_x_2 = document.getElementById('6');
   var L_cache_x_3 = document.getElementById('7');
   L_cache_x_1.style.display = "block";
   L_cache_x_2.style.display = "block";
   L_cache_x_3.style.display = "block";
   for (let i = 0; i < 3; i++)
    {
      var L_cache_x = document.getElementById(`${5+i}`);
      
      L_cache_x.innerText=L_arr[i];
      L_cache_x.style.width=`${15+(20*i)}vw`;
      L_cache_x.style.height=`${5+(10*i)}vh`;
      L_cache_x.style.transition=`${.5*(i+1)}s`;
      
    }
  }
  else if(count==8)
  {
    
    simulate(count);
  }
  else if(count==9)
  {
    simulate(count);
  }
  else if(count==10)
  {
    simulate(count);
  }
  else if(count==11)
  {
    simulate(count);
  }
  
  
  count++;
}




function simulate(count)
{ 
  
  var container=document.getElementById('container');
  container.innerHTML="";
  var simulate=document.createElement('div');
  simulate.setAttribute("id","simulate");
  container.appendChild(simulate);
  simulate.style.width="100vw";
  simulate.style.height="100vh";
  simulate.style.backgroundColor="lightyellow";
  
  var cpu=document.createElement('div');
  simulate.appendChild(cpu);
  cpu.setAttribute("id","CPU");
  cpu.style.width="35vw";
  cpu.style.height="20vh";
  cpu.innerText="CPU"
  
  
  var data=document.createElement('div');
  cpu.appendChild(data);
  data.setAttribute("id","data");
  data.style.width="15vw";
  data.style.height="5vh";
  data.innerText="data finder";
  
  
  var L1_cache=document.createElement('div');
  simulate.appendChild(L1_cache);
  L1_cache.setAttribute("id","L1_cache_ex");
  L1_cache.style.width="30vw";
  L1_cache.style.height="7vh";
  L1_cache.innerText="L1 Cache";
  
  
  var L2_cache=document.createElement('div');
  simulate.appendChild(L2_cache);
  L2_cache.setAttribute("id", "L2_cache_ex");
  L2_cache.style.width = "60vw";
  L2_cache.style.height = "14vh";
  L2_cache.innerText = "L2 Cache";
  
  var L3_cache = document.createElement('div');
  simulate.appendChild(L3_cache);
  L3_cache.setAttribute("id", "L3_cache_ex");
  L3_cache.style.width = "80vw";
  L3_cache.style.height = "20vh";
  L3_cache.innerText = "L3 Cache";
  
  
  
  condition_simulate(count);
}



function condition_simulate(count)
{ var simulate=document.getElementById('simulate');
  var info=document.createElement('div');
  simulate.appendChild(info);
  info.setAttribute("id","info");
  
  if(count==9)
  {
    info.style.width="36vw";
    info.style.height="20vh";
    info.style.backgroundColor="pink";
    info.innerText="Data is present in L1 cache so the dtat fonder will take data from L1 cache which is most closest to processor ";
    
    example_simulate(count);
   // info.style.transition=".7s";
  }
  else if (count == 10)
  {
    info.style.width = "40vw";
    info.style.height = "24vh";
    info.style.backgroundColor = "darkgreen"
    info.innerText="As data is not present in L1 cache so the data finder will approach towards L2 to find the data .If data is present there then it will stop his finding procedure";
    example_simulate(count);
    
  //  info.style.transition = ".7s";
  }
  else if (count == 11)
  {
    info.style.width = "42vw";
    info.style.height = "25vh";
    info.style.backgroundColor = "red";
    info.innerText="If data is not present in either of l1 and l2 ,then it will search in l3 and if it is present there then it will agains stop as previously ";
    example_simulate(count);
    
  //  info.style.transition = ".7s";
  }
}



function example_simulate(count)
{
  var d_data=document.getElementById('data');
  
  
  if(count==9)
  { 
    for(let i=0;i<4;i++)
    {
      setTimeout(()=>{
        d_data.style.marginTop=`${2*i*i}vh`;
      },200*i)
      
    }
    
  }
  else if (count == 10)
  {
    for (let i = 0; i < 5; i++)
    {
      setTimeout(() => {
        d_data.style.marginTop = `${2*i*i}vh`;
      }, 200 * i)
  
    }
  
  }
  else if (count == 11)
  {
    for (let i = 0; i < 6; i++)
    {
      setTimeout(() => {
        d_data.style.marginTop = `${2*i*i}vh`;
      }, 200 * i)
  
    }
  
  }
  
}