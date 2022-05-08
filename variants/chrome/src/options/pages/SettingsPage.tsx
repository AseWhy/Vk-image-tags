import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import ExtensionConfig from "../../../../../lib/support/ExtensionConfig";
import { KeyPressDetector } from "../components/KeyPressDetector";
import { toast } from "react-toastify";

export default function SettingsPage() {
    const [ values, setValues ] = useState(null);

    const formik = useFormik({
        initialValues: {
            [ExtensionConfig.KeyGoToNextSelection.name]: values?.KeyGoToNextSelection,
            [ExtensionConfig.LoadAllItemWhenSearch.name]: values?.LoadAllItemWhenSearch,
            [ExtensionConfig.TagsSearchIntervalKey.name]: values?.TagsSearchIntervalKey
        },
        enableReinitialize: true,
        onSubmit: (values) => {
            ExtensionConfig.setValues(values).then(e => toast("Успешно сохранено!"));
        },
    });

    useEffect(() => {
        ExtensionConfig.getFields().then(fields => {
            setValues(fields);
        });
    }, []);

    return <div className="settings-page-container">
        <Typography variant="h4" component="h4">
            Настройки
        </Typography>

        <form onSubmit={formik.handleSubmit}>
            <FormControlLabel
                control={
                    <Checkbox
                        name={ExtensionConfig.LoadAllItemWhenSearch.name}
                        checked={formik.values[ExtensionConfig.LoadAllItemWhenSearch.name] ?? false}
                        onChange={formik.handleChange}
                    />
                }
                disabled={values == null}
                label="Загружать все картинки, при поиске по тегам"
            />

            <TextField
                type={"number"}
                disabled={values == null}
                label="Интервал обновления поискового запроса"
                name={ExtensionConfig.TagsSearchIntervalKey.name}
                value={formik.values[ExtensionConfig.TagsSearchIntervalKey.name]}
                onChange={formik.handleChange}
                error={formik.touched[ExtensionConfig.TagsSearchIntervalKey.name] && Boolean(formik.errors[ExtensionConfig.TagsSearchIntervalKey.name])}
                variant="standard"
                InputLabelProps={{
                    shrink: true
                }}
            />

            <KeyPressDetector
                disabled={values == null}
                label="Клавиша перехода к следующей совпадающей картинке"
                name={ExtensionConfig.KeyGoToNextSelection.name}
                value={formik.values[ExtensionConfig.KeyGoToNextSelection.name]}
                onChange={formik.handleChange}
                error={formik.touched[ExtensionConfig.KeyGoToNextSelection.name] && Boolean(formik.errors[ExtensionConfig.KeyGoToNextSelection.name])}
                variant="standard"
                InputLabelProps={{
                    shrink: true
                }}
            />

            <Button
                type="submit"
            >
                Сохранить
            </Button>
        </form>
    </div>
}