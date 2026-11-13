# AFNEA website

Static website for the **Attawapiskat First Nation Education Authority**.
Plain HTML, CSS and JavaScript. No framework and no build step, so it runs on any basic web host.

## Files

| File | What it is |
|---|---|
| `index.html` | Home: hero slider, welcome, learning portals, Cree feature, latest newsletter |
| `vezina.html`, `kattawapiskak.html`, `independent-learning.html`, `community-learning.html` | Learning Portal pages: sign-in on the left, school or program write-up on the right |
| `beyond-the-school.html` | College and university applications, scholarships and bursaries |
| `newsletter.html` / `newsletter-item.html` | Announcement grid; each item opens on its own page (`newsletter-item.html?id=...`) |
| `cree.html` | Everyday Cree phrases and online Cree resources |
| `about.html` | About AFNEA and the staff directory |
| `contact.html` | Board Office details, map and contact form |
| `404.html` | "Page not found" page (most hosts use it automatically) |
| `css/styles.css` | All styling. Colours and fonts are in `:root` at the top |
| `js/main.js` | **All editable content** (top of file) and the shared header, footer and site code |
| `images/` | Logo, favicon and illustrations |

The header and footer are the same on every page. `js/main.js` inserts them, so you only edit them in one place.

## Editing content (no coding needed)

Open `js/main.js`. Everything you need is in **Part 1** at the top:

| To change… | Edit |
|---|---|
| Address, phone, fax, email, office hours, "Last updated" date | `SITE` |
| Menu items | `NAV` |
| Newsletter announcements | `NEWSLETTER` (add an item by copying an existing `{ ... },` block and changing the `id`) |
| Staff directory | `STAFF` |
| College, university and scholarship links | `BEYOND_LINKS` |
| Cree resource links | `CREE_RESOURCES` |
| Cree phrases | `CREE_PHRASES` |

Keep the quotes, commas and brackets as they are. After saving, upload `js/main.js` again.

Longer text, such as the school write-ups, the About text and the hero slide captions, is in the HTML file for that page. Look for the comments.

### Learning platform (LMS) sign-in

Each portal's sign-in form reads its address from `SITE.lmsUrls` in `js/main.js`:

```js
lmsUrls: {
  vezina: "https://learn.afnea.com/vezina/login",   // example
  kattawapiskak: "",
  ils: "",
  community: "",
},
passwordResetUrl: "",
```

- While a value is empty, the form checks that both fields are filled in and then shows a "coming soon" message. Nothing is sent or stored.
- Once a value is set, signing in takes the learner to that LMS sign-in page.
- If the LMS later supports single sign-on or a login POST endpoint, change the code at the `TODO (LMS)` comment in `initLoginForms()`.

### Contact form

1. Create a free form at [Formspree](https://formspree.io) (or Basin, Getform or Netlify Forms).
2. Paste its endpoint into `SITE.contactFormEndpoint`, for example `"https://formspree.io/f/abcdwxyz"`.

Until you do this, the form validates but tells the visitor to email or phone instead.

### External links

All external links are in the data lists in `js/main.js`, apart from the map on `contact.html`. External link cards open in a new tab.

## Replacing images with real photos

1. Put the photo in `images/`. Use JPG or WebP, about 1600×900 for hero and banner images and 800×450 for newsletter images. Compress it first, for example at <https://squoosh.app>.
2. Change the `src` in the HTML, or the `image` value in `NEWSLETTER`, to the new file name.
3. Update the `alt` text so it describes the photo.
4. Make sure the `width` and `height` attributes match the photo's ratio, for example `width="1600" height="900"`.

Hero slides are in `index.html`, inside `<section class="hero">`. Copy a whole `hero__slide` block to add a slide. Only the first slide should leave out `loading="lazy"`. Page banners are the `<section class="page-banner">` image at the top of each page.

Please use only photos shared with permission. Ask before posting photos of students.

## Previewing locally

From this folder, run either of these and open the address it prints:

```bash
python -m http.server 8000      # then visit http://localhost:8000
npx serve .
```

## Deploying

The site is just files. Upload the whole folder (except `Prompt.docx`, the PDF, the mock-up PNGs and the original large logo files).

- **Standard web host (FTP/SFTP):** use FileZilla or your host's file manager to upload everything into `public_html/` (or `www/`). `index.html` must be at the top level.
- **Netlify:** drag the folder onto <https://app.netlify.com/drop>, or connect a Git repository with no build command and publish directory `.`.
- **GitHub Pages:** push to a repository, then go to **Settings → Pages → Deploy from branch → `main` / root**.

**Before going live:** every page currently has a review-only line, `<meta name="robots" content="noindex, nofollow">`, with a `REVIEW ONLY` comment above it. It stops search engines listing the preview. Delete both lines from every `.html` file before launch, or the real site won't appear in Google.

If the site will not live at `https://www.afnea.com/`, update the `canonical` and `og:` URLs in the `<head>` of each page.

## Accessibility and performance notes

- Skip link, one `h1` per page, visible focus styles, alt text on images, and labelled form fields with error messages read out by screen readers.
- Dropdowns open on hover, click or tap, and with Enter or Space. Escape closes them and returns focus to the button.
- The slider pauses on hover or focus, supports swipe and arrow keys, and does not auto-advance when the visitor has reduced motion turned on.
- Images use `width`/`height`, the illustrations are small SVGs, and fonts load without blocking the page.
