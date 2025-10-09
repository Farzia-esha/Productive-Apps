
//get
export const loadApplist = () => {
  try {
    const data = localStorage.getItem('install')
    return data ? JSON.parse(data) : []
  } catch (err) {
    console.log(err)
    return []
  }
}

//save
export const updateList = (app) => {
  const install = loadApplist()

  try {
    const isDuplicate = install.some(a => a.id === app.id)
    if (isDuplicate) return alert('Already installed')
    const updatedApplist = [...install, app]
    localStorage.setItem('install', JSON.stringify(updatedApplist))
  } catch (err) {
    console.log(err)
  }
}

// delete
export const removeFromInstall = id => {
  const install = loadApplist()
  try {
    const updatedApplist = install.filter(a => a.id !== id)
    localStorage.setItem('install', JSON.stringify(updatedApplist))
  } catch (err) {
    console.log(err)
  }
}