'use client';

import { withProps } from '@udecode/cn';
import { createPlugins, Plate, PlateContent, PlateLeaf } from '@udecode/plate-common';
import { createParagraphPlugin, ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
import { createImagePlugin, ELEMENT_IMAGE } from '@udecode/plate-media';
import { createBoldPlugin, MARK_BOLD } from '@udecode/plate-basic-marks';
import { createAlignPlugin } from '@udecode/plate-alignment';

import { ImageElement } from '@/components/plate-ui/image-element';
import { ParagraphElement } from '@/components/plate-ui/paragraph-element';

import { Editor } from '@/components/plate-ui/editor';

const plugins = createPlugins(
  [
    createParagraphPlugin(),
    createImagePlugin(),
    createBoldPlugin(),
    createAlignPlugin({
      inject: {
        props: {
          validTypes: [
            ELEMENT_PARAGRAPH,
            // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3
          ],
        },
      },
    }),
  ],
  {
    components: {
      [ELEMENT_IMAGE]: ImageElement,
      [ELEMENT_PARAGRAPH]: ParagraphElement,
      [MARK_BOLD]: withProps(PlateLeaf, { as: 'strong' }),
    },
  }
);

const initialValue = [
  {
    id: '1',
    type: 'p',
    children: [{ text: 'Hello, World!' }],
  },
];

export function PlateEditor() {
  return (
    <Plate plugins={plugins} initialValue={initialValue}>
      <PlateContent />
    </Plate>
  );
}
