
using Domain;
using MediatR;
using Persistence;

namespace Application.LibrariaBoterore
{
    public class LibraBoterorByid
    {
        public class Query : IRequest<LibraBoteror>
        {
            public int ID { get; set; }
        }

        public class Handler : IRequestHandler<Query, LibraBoteror>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<LibraBoteror> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.LibraBoteror.FindAsync(request.ID);
            }
        }
    }
}