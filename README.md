create new react project
-npm create vite@latest project-name

install dependencies (every time clone react project need key in this in terminal)
-npm install

first step 
-need key in first Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
-then key in npm install vite --save-dev in terminal

update latest version from origin/main
-git checkout branch(make sure the branch that you want to update)
-git fetch origin
-git merge main
-go source control press sync or key in git pull

run project
-npm run dev

commit and push to github
-git checkout branchxxx
-git add .
-git commit -m "commit message"
-git push origin branchxxx

hook
useState - Add state to a component
useEffect - Run side effects (like fetching data or updating the DOM)
useContext - Access data from React context
useRef - Create a reference to a DOM node or value that persists
useMemo - Cache the result of a calculation to improve performance
useCallback - Cache a function so it’s not recreated on every render
useReducer - Manage complex state logic, like a mini Redux
useLayoutEffect - Like useEffect, but fires before the browser paints
useImperativeHandle - Customize a ref from a parent component


DOM - document object model
example
<p id="demo">Hello</p>
const el = document.getElementById('demo');
el.textContent = 'Goodbye';
el.innerHTML = '<strong>Bold Text</strong>';
el.style.color = 'red';
el.style.backgroundColor = 'yellow';
el.classList.add('active');
el.classList.remove('active');
el.classList.toggle('active');
