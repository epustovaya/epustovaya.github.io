import { ObjectSchema } from 'yup';
import { SchemaObjectDescription } from 'yup/lib/schema';

export function getFormLabelsFromSchema(schema: ObjectSchema<any>): Record<string, string> {
  const description = schema.describe();

  return Object
    .entries(description.fields)
    .reduce((acc, [name, field]) => {
      acc[name] = (field as SchemaObjectDescription).label;

      return acc;
    }, {} as Record<string, string>);
}
