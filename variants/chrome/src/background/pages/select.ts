import FilterImagesController from "../controllers/FilterImagesController";
import TagsSearchLiveCont from "../html/TagsSearchLiveCont";

const VK_IMG_PHOTOS_CONT_CONT_TAGET = "photos_choose_wrap";

export default function handler() {
    TagsSearchLiveCont.render(
        [],
        {
            onSearch: FilterImagesController.showMathes.bind(FilterImagesController)
        },
        document.getElementById(VK_IMG_PHOTOS_CONT_CONT_TAGET),
        (rendered, container) => {
            container.prepend(rendered);
        }
    );
}