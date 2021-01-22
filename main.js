let countLinear = 0
let countLeft = 0
let countRight = 0
let countCenter = 0

var header = document.getElementById('checkActive')
var btns = header.getElementsByClassName('btn')
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active')
    current[0].className = current[0].className.replace(' active', '')
    this.className += ' active'
  })
}

function changeDisplay(id) {
  const linear = document.getElementById('linear')
  const leftSidebar = document.getElementById('left-sidebar')
  const centerSidebar = document.getElementById('center-sidebar')
  const rightSidebar = document.getElementById('right-sidebar')

  const btn = document.getElementsByClassName('btn')

  switch (id) {
    case 'linear':
      if (linear.classList.contains('active')) {
        break
      }
      console.log('linear')
      var aside = document.getElementById('aside')
      var firstContent = document.getElementById('firstContent')
      firstContent.style.cssFloat = ''
      firstContent.style.marginRight = ''
      firstContent.style.width = ''
      aside.style.cssFloat = ''
      aside.style.height = ''
      aside.style.marginLeft = ''
      aside.style.marginTop = ''
      linear.innerHTML = `Linear = ${++countLinear}`
      break
    case 'leftSidebar':
      if (leftSidebar.classList.contains('active')) {
        break
      }
      console.log('left-sidebar')
      var aside = document.getElementById('aside')
      var firstContent = document.getElementById('firstContent')
      firstContent.style.cssFloat = ''
      firstContent.style.marginRight = ''
      firstContent.style.width = ''
      aside.style.cssFloat = 'left'
      aside.style.height = '120px'
      aside.style.marginLeft = '30px'
      leftSidebar.innerHTML = `Left Sidebar = ${++countLeft}`
      break
    case 'centerSidebar':
      if (centerSidebar.classList.contains('active')) {
        break
      }
      console.log('center-sidebar')
      var aside = document.getElementById('aside')
      var firstContent = document.getElementById('firstContent')
      firstContent.style.cssFloat = 'left'
      firstContent.style.marginRight = '30px'
      firstContent.style.width = '30%'
      aside.style.cssFloat = 'left'
      aside.style.marginTop = '20px'
      aside.style.height = '120px'
      aside.style.marginLeft = '30px'
      centerSidebar.innerHTML = `Center Sidebar = ${++countCenter}`
      break
    case 'rightSidebar':
      if (rightSidebar.classList.contains('active')) {
        break
      }
      console.log('right-sidebar')
      var aside = document.getElementById('aside')
      var firstContent = document.getElementById('firstContent')
      firstContent.style.cssFloat = ''
      firstContent.style.marginRight = ''
      firstContent.style.width = ''
      aside.style.cssFloat = 'right'
      aside.style.height = '120px'
      aside.style.marginLeft = '30px'
      rightSidebar.innerHTML = `Right Sidebar = ${++countRight}`
      break
  }
}
