import React from "react";

/**
 * An `<a>` tag with `rel="noreferrer nofollow"`.
 *
 * This will also open links in a new tab.
 */
export default (props: { href: string; children: React.ReactNode[] }) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer nofollow">
      {props.children}
    </a>
  );
};
