export const pieces = ['wP', 'wN', 'wB', 'wR', 'wQ', 'wK', 'bP', 'bN', 'bB', 'bR', 'bQ', 'bK'];

// calculate the board width based on the window size
export const boardWidth = 700;

export const customPieces = () => {
    const returnPieces = {} as any;
    pieces.map((p) => {
        returnPieces[p] = ({ squareWidth }: { squareWidth: number }) => (
            <div
                style={{
                    width: squareWidth,
                    height: squareWidth,
                    backgroundImage: `url(/folder/${p}.png)`,
                    backgroundSize: '100%',
                    opacity: 1,
                }}
            />
        );
        return null;
    });
    return returnPieces;
};