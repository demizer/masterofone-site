import { A } from "solid-start";
import kebabCase from '~/lib/kebabCase'
import { ITag } from "~/types";

const Tag = (props: ITag) => {
    return (
        <A href={`/tags/${kebabCase(props.name)}`}>
            <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                {props.name.split(' ').join('-')}
            </a>
        </A>
    )
}

export default Tag
