export default function Button({ value }) {
    return (
        <>
            <input
                type='submit'
                id='submit'
                name='submit'
                value={value}
            />
        </>
    )
}
