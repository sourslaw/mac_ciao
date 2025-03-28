# [Midwest Archives Conference | Minneapolis 2025](https://www.midwestarchives.org/2025-annual-meeting)

![alt text](assets/screenshot.png)

This is a static page for the illustrative application of IIIF Manifests and Universal Viewer. This is a resource for the talk, [Serving it Up with Ones and Zeroes: A Programmatic Workflow for Inserting Content Notices in Digital Collections](https://midwestarc.memberclicks.net/2025-call-for-poster-proposals).
<hr>

### THURSDAY, April 10 - SATURDAY, April 12, 2025

### Serving it Up with Ones and Zeroes: A Programmatic Workflow for Inserting Content Notices in Digital Collections 

As best practices evolve and exemplary case studies for reparative description across traditional finding aids and physical collections continue to emerge, applications of these principles and workflows in the digital realm remain scarce. This poster would outline a new workflow developed at the University of Minnesota Libraries for adding content notices to public-facing digital collections. We will outline multiple points of communication between curators, archivists, and other content experts; digitization staff; digital collections managers; and finally, web application developers, to demonstrate the deep collaboration required of this important work. We will also highlight a new programmatic workflow for generating a “flag” in ContentDM-generated metadata that signals the insert of a pre-designed content notice into the IIIF metadata of a digital object. This exciting code application opens new possibilities to automate the inclusion of content notices at the front of digital objects, thereby saving time as well as advocating for this work to departments and stakeholders beyond traditional archival administrators. It also opens new opportunities for user experience studies and other work in support of reparative description efforts. The poster will provide a diagram and overview of the workflow, utilize screenshots as visual aids, and feature a QR code that links to both online examples of finished objects and our GitHub repository so that others may integrate this work into their own IIIF manifests. This would be our first time presenting this new programmatic work to colleagues outside the UMN; we are excited by the opportunity to share it with the MAC community. 

#### Speakers
- Theresa Berger, University of Minnesota, Head of Digital Library Services
- Scott Lawan, University of Minnesota, Libraries Web Applications Developer
<hr>

#### Additional Links
- Link to the demo/example page may be found: [here](https://sourslaw.github.io/mac_ciao/)
- Additional information regarding IIIF may be found: [here](https://iiif.io/)
- Addtional information regarding what the University of Minnesota Libraries is doing with [Blacklight](https://github.com/projectblacklight/blacklight) or IIIF may be directed to: [Lawans@umn.edu](mailto:lawans@umn.edu)

---

This uses UV v3, for v4 examples use https://github.com/UniversalViewer/uv-examples

#### Prerequisites
- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/)

Once these are installed, clone this repository to your file system, then run the following commands in your terminal:

```
cd mac-hello
npm install
npm start
```

Then browse to `localhost:5000`. (You can run the UV on regular port 80, we're just using 5000 to test on localhost).

Video guide: https://youtu.be/wHK5DmMYXZE
