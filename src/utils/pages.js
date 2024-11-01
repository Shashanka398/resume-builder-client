export const pages =[
    '/basic-details',
    '/experience-details',
    '/education-details',
    '/certification-details'
]

export const years=(startYear, endYear)=> {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
        years.push(year);
    }
    return years;
}

