export const fakeAPI = async () => {
    return new Promise<{ data: number }>((resolve) =>
        setTimeout(() => resolve({ data: 3 }), 1000)
    );
};