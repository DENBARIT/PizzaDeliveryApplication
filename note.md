<!-- 2/22  -->
Package installation=> npm i eslint vite-plugin-eslint eslint-config-react-app --save-dev
=>inside vite.config.js 
import eslint from "vite-plugin-eslint";

utils=>stateless helper functions2
#Steps 
1)Getting the functional requirements 
2)planning the project
3)structuring the project 
4)npm i react-router-dom
=>react router documentation

#Create the loader,Provide the loader and then provide the data for the page 
useNavigate: You use it to programmatically move the user to a new page (e.g., redirecting after a form submission).useNavigation: You use it to read the current state of navigation (e.g., checking if a page is loading so you can show a spinner).
###The request from the form will be intercepted by the action function

<!-- 11/22 -->
here why is the hidden input required is that

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button>Order now</button>
        </div>
        since the cart variable cannot be directlyb submitted to the form by the form ,so we need to make a hidden input type to be inculded in the form submitted

Actions and Loader
=>How to fetch data using loaders then right data using actions
=>flex-basis=>marking the minmum (basic) space for the flex