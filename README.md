# 👩🏻 portifolio-marylinh

A portifolio page I made for Mary Linh - an amazing architect. Check it out live on https://miichu.github.io/portifolio-marylinh/

## 🏃🏻 How to run locally for development

1. clone this project
2. install the app with `yarn`
3. To run the app locally, run `yarn dev` in root
4. To run Sanity Studio locally, `cd` into `sanity-project` folder. Then run `yarn dev`.

## 🚀 To deploy the app

#### To deploy the frontend

1. `npm run build`. Make sure to fix the errors if there are any.
2. `git add .`
3. `git commit -m "commit message"`
4. `git push` etc...

#### To deploy the Sanity Studio

1. `cd` into `sanity-project` folder.
2. Run `sanity deploy`.
3. If you have access, log in and check it out here https://marylinh-portifolio.sanity.studio/desk/user

## Design and implementation notes

- Beige colors taken from https://www.color-hex.com/color-palette/7172

## 👩🏻‍💻 Progress / To do list

### ❗ Must haves

- [x] Set up page on github pages and add styled components
- [x] Add navigation menu
- [x] Add content in About Me page.
- [x] Add Projects View page
- [ ] Add Projects content. Proper routes from navigation page, responsitivity
- [] Make sure page, content and menu is responsive

### ✨ Nice to have

- [x] Page active? Underline in the menu
- [] SPA when clicking nav points it will scroll down instead with a sticky menu
- [] Use Sanity for content management
- [] Fancy scroll/animation show for photos of each project
