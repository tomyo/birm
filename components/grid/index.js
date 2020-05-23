// import "react";
import styled from "styled-components";

const FlexWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: ${(props) => props.flexFlow || "row nowrap"};
  align-items: ${(props) => props.alignItems || "stretch"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  & > *:not(:last-child) {
    margin-bottom: ${(props) => props.gap || "0"};
  }
`;

export function Flex({ children, className, flexFlow, alignItems, justifyContent, gap }) {
  return (
    <FlexWrapper
      className={className}
      flexFlow={flexFlow}
      alignItems={alignItems}
      justifyConten={justifyContent}
      gap={gap}
    >
      {children}
    </FlexWrapper>
  );
}

const BoxWrapper = styled.div`
  height: ${(props) => props.height || ""};
  width: ${(props) => props.width || ""};
  margin: ${(props) => props.margin || ""};
  padding: ${(props) => props.padding || "8px"};
  flex-basis: ${(props) => props.flexBasis || "auto"};
  flex-grow: ${(props) => (props.flexGrow !== undefined ? props.flexGrow : 0)};
  flex-shrink: ${(props) =>
    props.flexShrink !== undefined ? props.flexShrink : 1};
  align-self: ${(props) => props.alignSelf || "stretch"};
  overflow: ${(props) => (props.scroll ? "scroll" : null)};
  /* Prevent margin collapsing of Flex containers */
  ::before,
  ::after {
    content: " ";
    display: table;
  }
`;

export function Box({
  children,
  height,
  width,
  margin,
  padding,
  flexBasis,
  flexGrow,
  flexShrink,
  alignSelf,
  scroll,
}) {
  return (
    <BoxWrapper
      height={height}
      width={width}
      margin={margin}
      padding={padding}
      flexBasis={flexBasis}
      flexGrow={flexGrow}
      flexShrink={flexShrink}
      alignSelf={alignSelf}
      scroll={scroll}
    >
      {children}
    </BoxWrapper>
  );
}
