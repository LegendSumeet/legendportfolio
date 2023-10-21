import classNames from "classnames";
import { Field, useField } from "formik";

export interface SelectProps {
  label: string;
  id: string;
  options: string[];
}

export const Select = ({ label, id, options }: SelectProps) => {
  const [field, meta] = useField(id);

  return (
    <section>
      <label htmlFor={id} className="flex text-white flex-col font-bold">
        {label}
      </label>
      <label htmlFor={id} className=" flex flex-col font-bold">
        <Field
          as="select"
          name={id}
          id={id}
          className={classNames(
            "my-2 rounded-md px-4 py-2 ring-1 bg-black",
            {
              "ring-red-600": meta.touched && meta.error,
              "ring-grey-400 text-white": !meta.touched || !meta.error,
            }
          )}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
        >
          <option className="text-white" value="">Please select</option>
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </Field>
        <div className="font-sm font-normal text-red-600">
          {meta.touched && meta.error}
        </div>
      </label>
    </section>
  );
};
