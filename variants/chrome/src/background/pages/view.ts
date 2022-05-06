import { Store } from "../database";
import { TagEntry } from "../database/entities/TagEntry";
import TagsLiveCont from "../html/TagsLiveCont";

const tagEntries = Store.tagEntries;

const VK_IMG_TAGS_CONT_IMG_TARGET = "#pv_photo > img";
const VK_IMG_TAGS_CONT_CONT_TAGET = "#layer .clear_fix .ui_scroll_content";
const VK_IMG_TAGS_CONT_AFTER_TAGET = ".like_wrap";

// 
// Просмотр картинки, тут можно добавить теги
// 
export default async function handler() {
    const photo = document.querySelector<HTMLImageElement>(VK_IMG_TAGS_CONT_IMG_TARGET);

    if(photo != null) {
        const tagsContainer = document.querySelector(VK_IMG_TAGS_CONT_CONT_TAGET);
        
        if(tagsContainer != null) {
            const tagsBefore = tagsContainer?.querySelector(VK_IMG_TAGS_CONT_AFTER_TAGET);

            if(tagsBefore != null) {
                const name = tagsBefore.classList.value.split(' ').find(e => e.startsWith("_like_photo"))?.substring(6);

                let descriptor = await tagEntries.where('name').equals(name).first();
                let tagDescriptor: TagEntry;

                if(descriptor != null) {
                    tagDescriptor = new TagEntry(descriptor);
                } else {
                    tagDescriptor = new TagEntry(name);
                    
                    tagDescriptor.setUrl(photo.src);
                }

                TagsLiveCont.render(
                    {
                        name,
                        tags: tagDescriptor.tags
                    },
                    {
                        async onAdd(tag) {
                            tagDescriptor.addTag(tag);

                            await tagEntries.put(tagDescriptor.toJSON());

                            console.log("Image added tag", tagDescriptor.toJSON());
                        },

                        async onRemove(tag) {
                            tagDescriptor.removeTag(tag);

                            await tagEntries.update(name, tagDescriptor.toJSON());

                            console.log("Image removed tag", tagDescriptor.toJSON());
                        },

                        async onEdit(tag, to) {
                            tagDescriptor.editTag(tag, to);

                            await tagEntries.update(name, tagDescriptor.toJSON());

                            console.log("Image edited tag", tagDescriptor.toJSON());
                        }
                    },
                    tagsContainer,
                    (rendered, container) => {
                        const tagsBeforeNext = tagsBefore.nextSibling;

                        if(tagsBeforeNext == null) {
                            return;
                        }
            
                        if(tagsBeforeNext != rendered) {
                            container.insertBefore(rendered, tagsBeforeNext);
                        }
                    }
                );
            }
        }
    }
}