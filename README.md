first step 
-need key in first Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
-then key in npm install vite --save-dev in terminal

update latest version from origin/main
-git checkout branch(make sure the branch that you want to update)
-git fetch origin
-git merge origin/main
-go source control press sync

run project
-npm run dev


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