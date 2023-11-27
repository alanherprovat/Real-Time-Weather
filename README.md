## Real-Time-Weather
I developed a single-page web application using React JS, which includes several key features. It fetches data from an API and displays the required outputs. Furthermore, I’ve incorporated an auto-search functionality to enhance the user experience. The screenshot below provides a visual representation of the web application’s interface.

![Preview1](https://drive.google.com/uc?export=view&id=1tnBWpdPOxYfqD12V9fq6GLNi7qwddf2m)

## Functionalities:

1. **Home Layout:**
   - Developed an appealing layout to showcase real-time data effectively.
   - Integrated a geolocation button to retrieve the longitude and latitude from the user’s device.
   - Enhanced the navigation section with a search bar for effortless auto-searching and click functionality. 
2. **Searching:**
   - The application now features an advanced search option. This utilizes an API call to `api.weatherapi.com`, fetching cities that match the search field input in real time.
3. **User Experience:**
   - The application emphasizes a seamless user experience.
   - It enables users to view real-time environmental data of cities.
   - The interface includes sophisticated transitions and animations for an interactive experience.
   - Future enhancements will focus on providing more precise location tracking.
   
4. **[Live Demo:](https://realtime-weather-007.netlify.app/)**
   - After completing Production build, project is being deployed at [Netlify](https://realtime-weather-007.netlify.app/).

## How to Clone the Project
Here is a step-by-step guide on how to clone a project from GitHub:

1. **Find the Repository**: Log in to your GitHub account and find the repository you want to clone.
2. **Copy the URL**: On the master/main page of the repository, click on the `Code` button. You will see an option to clone. Copy the URL.
3. **Open Terminal**: Depending on your system, you'll use Terminal (with Mac) or Command line (with Windows git bash) to move it to your local directory.
4. **Change Directory**: Change the current working directory to the location where you want the cloned directory.
5. **Clone the Repository**: Type `git clone`, and then paste the URL you copied earlier. Press Enter to create your local clone. The command will look something like this:
    ```
    git clone https://github.com/alanherprovat/Real-Time-Weather.git
    ```
6. **Check the Directory**: You should see a folder that just being clonned to your local directory.
7. Open the project folder in VS Code, launch a terminal, and enter `npm install` to install all necessary dependencies.
8. As a final step, please remember to create an `.env` file in the root directory of your local app environment. This file should contain your API key. This approach ensures the secure handling of sensitive information.
    ```
    VITE_API_KEY=Your_Api_Key
    ```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
