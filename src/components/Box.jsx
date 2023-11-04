export function Box({ children, columnSize = 7 }){
    return (
        <div className={`container-sm col-${columnSize} mt-5`}>
          <div className="shadow mb-5 bg-body-tertiary rounded">
            <div className="border border-1 rounded p-5">
                {children}
            </div>
          </div>
        </div>
      );
}