export function convertObjToLink(obj) {
    let link = obj.link + obj.search + obj.limit + obj.page + obj.promo + obj.active
    link = link.replace('?&', '?');
    return link;
}