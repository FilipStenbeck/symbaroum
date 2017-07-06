export default function unique (array) {
    return array.filter((value, index, array) => array.indexOf(value) === index);
}
