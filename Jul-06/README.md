# Jul-06, 2022

# Boilerpate
- The basic code that you need to get any program started.
- The minimum requirement of code. (With good pracitce)

**Note: Generally, the attribute sequence does not matter. However, you should NOT have two attributes with the same name inside any element. In case if you have that, it will take the first one and ignore the other attribute with the same name.**


# Combinator
- Combining 2 selectors with a relation.
- Style is applied to the last selector.

## Child Combinator
- This combines two element reltion with direct child. That means, 1 level down.
- Syntax (>)
selector1 > selector2

## Descendant Combinator
- This combines two elements relation of descendant and ancestor. 
- Descendant means that the element can be child, grand child, great grand child, etc.
- Syntax ( )
selector1 selector2

## Sibling Combinator
- This selects the elements AFTER the first selector.

### General Sibling
- Selects ALL the elements that matches the selector rule after the element.
- Syntax (~)

### Adjacent Sibling
- Selects the immediate next element which matches the rule.
- Syntax (+)

### border-collapse
- Collapses the border and make it look one line, instead of generally 2 lines with a gap.

### text-align
- Aligns the text items, left, right, center or justify

### font-weight
- Changes the thickness of the font (make it look bold or thin)
- Values from 100 to 900

## Pseudo selector
- These are kind of selectors that are applied for a specific situation. We treat them as pseudo (not real) selector because they CANNOT survive on their own. A pseudo selector always needs a base selector on it.

### Pseudo classes
- Dnoted by single colon :

- :first-child
- :last-child
- :nth-child
- :only-child

### Pseudo elements
- Denoted by double colon ::

1. Specificity
