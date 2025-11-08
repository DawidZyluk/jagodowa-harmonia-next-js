import classNames from 'classnames';

type NameWithModifiers<Name extends string> =
  | Name
  | [name: Name, modifiers: Record<string, unknown>];

/**
 * Create a component class name with BEM modifiers
 *
 * @example
 * const names = createBemClassNames('header-section', 'custom-class', 'background', 'content');
 *
 * // names['header-section'] === 'header-section custom-class'
 * // names.background === 'header-section__background custom-class__background'
 * // names.content === 'header-section__content custom-class__content'
 *
 * @example
 * const names = createBemClassNames(
 *  ['header-section', { large: true }],
 *  'custom-class',
 *  ['background', { active: true }],
 *  'content'
 * );
 *
 * // names['header-section'] === 'header-section header-section--large custom-class custom-class--large'
 * // names.background === 'header-section__background header-section__background--active custom-class__background custom-class__background--active'
 * // names.content === 'header-section__content custom-class__content'
 *
 * @param block - block name or block name with modifiers
 * @param className - additional class names
 * @param elements - elements names or elements names with modifiers
 * @returns object with class names
 */
export function createBemClassNames<Name extends string>(
  block: NameWithModifiers<Name>,
  className: string | undefined,
  ...elements: NameWithModifiers<Name>[]
): Record<Name, string> {
  const blockName = typeof block === 'string' ? block : block[0];
  const blockModifiers = typeof block === 'string' ? {} : block[1];

  const blockNames = [
    blockName,
    ...(className?.trim().split(/\s+/) ?? []),
  ];

  const elementsNames = elements.map<[Name, Record<string, unknown>]>(element =>
    typeof element === 'string' ? [element, {}] : element
  );

  const returnObject = {
    [blockName]: blockNames
      .map(name =>
        classNames(
          name,
          Object.fromEntries(
            Object.entries(blockModifiers).map(([key, value]) => [`${name}--${key}`, value])
          )
        )
      )
      .join(' '),
  };

  elementsNames.forEach(element => {
    const [elementName, elementModifiers] = element;

    returnObject[elementName] = blockNames
      .map(name =>
        classNames(
          `${name}__${elementName}`,
          Object.fromEntries(
            Object.entries(elementModifiers).map(([key, value]) => [
              `${name}__${elementName}--${key}`,
              value,
            ])
          )
        )
      )
      .join(' ');
  });

  return returnObject as Record<Name, string>;
}

/**
 * Helper function to create BEM class name
 * 
 * @example
 * const className = bem('header-section', 'background');
 * // className === 'header-section__background'
 * 
 * @example
 * const className = bem('header-section', 'background', { active: true });
 * // className === 'header-section__background header-section__background--active'
 * 
 * @param block - block name
 * @param element - element name (optional)
 * @param modifiers - modifiers object (optional)
 * @returns BEM class name string
 */
export function bem(
  block: string,
  element?: string,
  modifiers?: Record<string, unknown>
): string {
  const baseClass = element ? `${block}__${element}` : block;
  
  if (!modifiers) {
    return baseClass;
  }

  const modifierClasses = Object.entries(modifiers)
    .filter(([, value]) => value)
    .map(([key]) => `${baseClass}--${key}`);

  return classNames(baseClass, modifierClasses);
}

