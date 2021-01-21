countLinear = 0
countLeft = 0
countRight = 0
countCenter = 0

function changeDisplay(id) {
  const linear = document.getElementById('linear')
  const leftSidebar = document.getElementById('left-sidebar')
  const centerSidebar = document.getElementById('center-sidebar')
  const rightSidebar = document.getElementById('right-sidebar')

  switch (id) {
    case 'linear':
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
