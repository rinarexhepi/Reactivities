
using Domain;
using MediatR;
using Persistence;

namespace Application.LibrariaPerFemije
{
    public class LibratPerFemijeById
    {
        public class Query : IRequest<LibraPerFemije>
        {
            public int ID { get; set; }
        }

        public class Handler : IRequestHandler<Query, LibraPerFemije>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<LibraPerFemije> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.LibraPerFemije.FindAsync(request.ID);
            }
        }
    }
}
