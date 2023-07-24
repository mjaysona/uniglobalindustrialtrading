import { LinkFeature, lexicalRichTextField } from 'payload-plugin-lexical';
import { Block } from 'payload/types';
import { SerializedLexicalEditorState } from '../../components/LexicalRichText/types';
import widthField, { WidthFieldType } from '../../fields/widthField';

export type ContentBlockType = {
  content: {
    jsonContent: SerializedLexicalEditorState,
  },
} & WidthFieldType;

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Content',
    plural: 'Content Blocks',
  },
  fields: [
    widthField,
    lexicalRichTextField({
      name: 'content',
      label: 'Enter content below',
      required: true,
      editorConfigModifier: (defaultEditorConfig) => {
        defaultEditorConfig.toggles.textColor.enabled = false;
        defaultEditorConfig.toggles.textBackground.enabled = false;
        defaultEditorConfig.toggles.font.enabled = false;

        defaultEditorConfig.features = [
          LinkFeature({}),
        ]

        return defaultEditorConfig;
      }
    }),
  ],
};


export default Content;
