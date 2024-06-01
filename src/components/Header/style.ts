import styled from "styled-components";
import { color } from "../../GlobalStyles";

export const HeaderContainer = styled.nav`
    margin: 0 auto;
    position: sticky;
    display: flex;
    justify-content: center;
    background-color: ${color.altertext};

    section {
        width: 100%;
        min-height: 60px;
        max-width: 1440px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        ul {
            display: flex;
            gap: 12px;

            li {
                color: ${color.background};

                a {
                    color: ${color.background};
                    text-decoration: none;

                    &.active {
                        color: ${color.primary};
                    }
                }
            }
        }
    }
`