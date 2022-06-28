


using Domain;
using MediatR;
using Persistence;

namespace Application.LibrariaPublikime
{
    public class PublikimeById
    {
        public class Query : IRequest<Publikime>
        {
            public int ID { get; set; }
        }

        public class Handler : IRequestHandler<Query, Publikime>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Publikime> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Publikime.FindAsync(request.ID);
            }

        }
    }
}