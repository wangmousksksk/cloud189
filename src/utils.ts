export const bytesToSize = (bytes: number) => {
    if (!bytes) return '0 B';

    const k = 1024;

    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return (bytes / Math.pow(k, i)) + ' ' + sizes[i];

}