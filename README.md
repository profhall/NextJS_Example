# Next Example

Enjoy!
Videos are rendered using next.js horizontal snap scroll 

## Furtther Functionality

### Login & Logout
If a user isn't logged in they will be pushed to the Login page using `useRouter` hook.  Upon login the user will be sent to homepage where they can access their account and all other pages. When the user does logout, a logout popup will display a message for a brief moment then redirect to the login page.

### State Management
To manage state for this app I'd use hooks such as:
- useState: to create and maniplate state within components.
- useEfect: to help manage side efects 
- useContext: `useContext` and `createContext` will be used to create and establish the app context. Properlly using an `AuthProvider` comp that wraps an `AuthContext.Provider` element for the around app make sure that the app and its component can always access the context and its state.`useAuth` and`useRouter` will be used to authenticate users, if no user is present authenticated or logged in, `useRouter`will push user to a login page, see eampls code snippet:

```jsx
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';

function Profile() {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome, {user.name}!</p>
    </div>
  );
}

export default Profile;
```

----

## Disclaimers 
### Jest
My testing isn't as strong, and could be better implemented within this mockup. A little more review is needed on my end. The testing for the Video section dosen't pass and I know why, but I'm not sure how to fix it, it's due to the data request. 

### Video Rendering
I guessed on how you wanted me to display all the videos, a snap side scroll seemed like the less bulky option that would remove alot of scolling. I wanted to do buttons that toggled between `next video` & `previous video` by updating a hook that kept track of the cuurrent video by using its index. `onClick` that index would be updated and the video information would update inside the component. The original mock didn't include buttons so I didnt want to add them, so this is what I came up with.

### Gradient Box
The gradient box needs a little more work, I could not get the ratio to stick with the image at every screen size. I think what could fix this is to make the gradient width max to the image size, to get this I would need to know the true size of each image, and use that resolution to set the width max on the gradient overlay box

### Mobile Menu
I didn't style the mobile menu completely, but I built out the layout to show how I would handle it.

## This was my first time using Next.js & Tailwind
