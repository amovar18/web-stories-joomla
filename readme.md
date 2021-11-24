# Web stories for Joomla CMS
---
## Steps to make it work:
1. Login as admin.
2. Go to system->extension and select `install from folder`
3. Put the path of the extension you want to install
4. Install the folder named `webstories`.
5. Install the folder named `webservices`.
6. Install the folder named `fields`.
7. Install the folder named `module`.
8. Go to `Content`->`Site Modules`->`+ New`. Name the module something unique and the position should also be unique something like `webstories`|`google-webstories`.
9. Save the module.
10. Go to `Content`->`Fields`->`+ New`. Create a field add a name to it and save it.
11. Now after creating a story. Go to content and add a story by going to `Fields` tab and selecting the webstory you want to display.
12. Now inside the article tab insert the following code `{loadposition position}`.Position being the position of the module you set while creating the module. You can also insert the module by clicking on dropdown where `CMS content` is written and select module which will show a list of modules, select the module you created for web story. Save the story.
13. Preview the article and you can see the `web story` embedded.
---