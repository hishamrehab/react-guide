import React from 'react'

const Buttons = () => {
  return (
    <div>
        <button className="btn">Default</button>
        <button className="btn btn-xs">Xsmall</button>
        <button className="btn btn-sm">Small</button>
        <button className="btn">Medium</button>
        <button className="btn btn-lg">Large</button>
        <button className="btn btn-xl">Xlarge</button>
        <button className="btn btn-xs">Xsmall</button>
<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Responsive</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-info">Info</button>
<button className="btn btn-success">Success</button>
<button className="btn btn-warning">Warning</button>
<button className="btn btn-error">Error</button>
<button className="btn btn-soft">Default</button>
<button className="btn btn-soft btn-primary">Primary</button>
<button className="btn btn-soft btn-secondary">Secondary</button>
<button className="btn btn-soft btn-accent">Accent</button>
<button className="btn btn-soft btn-info">Info</button>
<button className="btn btn-soft btn-success">Success</button>
<button className="btn btn-soft btn-warning">Warning</button>
<button className="btn btn-soft btn-error">Error</button>
<button className="btn btn-outline">Default</button>
<button className="btn btn-outline btn-primary">Primary</button>
<button className="btn btn-outline btn-secondary">Secondary</button>
<button className="btn btn-outline btn-accent">Accent</button>
<button className="btn btn-outline btn-info">Info</button>
<button className="btn btn-outline btn-success">Success</button>
<button className="btn btn-outline btn-warning">Warning</button>
<button className="btn btn-outline btn-error">Error</button>
<button className="btn btn-dash">Default</button>
<button className="btn btn-dash btn-primary">Primary</button>
<button className="btn btn-dash btn-secondary">Secondary</button>
<button className="btn btn-dash btn-accent">Accent</button>
<button className="btn btn-dash btn-info">Info</button>
<button className="btn btn-dash btn-success">Success</button>
<button className="btn btn-dash btn-warning">Warning</button>
<button className="btn btn-dash btn-error">Error</button>
<div className="bg-white p-6">
  <button className="btn btn-neutral btn-outline">Outline</button>
  <button className="btn btn-neutral btn-dash">Dash</button>
  <button className="btn btn-active">Default</button>
<button className="btn btn-active btn-primary">Primary</button>
<button className="btn btn-active btn-secondary">Secondary</button>
<button className="btn btn-active btn-accent">Accent</button>
<button className="btn btn-active btn-info">Info</button>
<button className="btn btn-active btn-success">Success</button>
<button className="btn btn-active btn-warning">Warning</button>
<button className="btn btn-active btn-error">Error</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-link">Link</button>
<button className="btn btn-wide">Wide</button>
<a role="button" className="btn">Link</a>
<button type="submit" className="btn">Button</button>
<input type="button" value="Input" className="btn" />
<input type="submit" value="Submit" className="btn" />
<input type="radio" aria-label="Radio" className="btn" />
<input type="checkbox" aria-label="Checkbox" className="btn" />
<input type="reset" value="Reset" className="btn" />
<button className="btn" disabled="disabled">Disabled using attribute</button>
<button className="btn btn-disabled" tabIndex="-1" role="button" aria-disabled="true">
  Disabled using class name
</button>

<button className="btn btn-square">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
</button>
<button className="btn btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
</button>
</div>
    </div>
  )
}

export default Buttons