import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./preview-collection.styles.scss";

export default function PreviewCollection({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="collection-preview__title">{title.toUpperCase()}</h1>
      <div className="collection-preview__previews">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemprops }) => (
            <CollectionItem key={id} {...otherItemprops} />
          ))}
      </div>
    </div>
  );
}
