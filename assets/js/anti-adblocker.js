let adClasses = ['ad','ads','doubleclick','ad-placeholder','ad-badge','adserver','-ad-tags','adclass','adloaded','nativeads','a-ad'];
let adIds = ['adspot-','sticky_ad_','lazyad-']
let adParentDiv = document.createElement('div')

adIds.forEach(e=>{
  let adDiv = document.createElement('div');
  adDiv.id = adDiv.id + '' + e
  adClasses.forEach(e=>{
    adDiv.classList.add(e);
  })
  adDiv.classList.add('erstream-ads');
  adDiv.style.display='block'
  
  adParentDiv.appendChild(adDiv)
})

document.head.appendChild(adParentDiv);



var eyeOfErstream={};

eyeOfErstream.detectedBloke = () => {
    return false;
}