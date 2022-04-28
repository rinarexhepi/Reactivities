using Domain;
using MediatR;
using Persistence;

namespace Application.Books
{
    public class Create
    {
        public class Command : IRequest
        {
            public Book Book { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _contex;
            public Handler(DataContext context)
            {
                _contex = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellation)
            {
                _contex.Books.Add(request.Book);

                await _contex.SaveChangesAsync();

                return Unit.Value;
            }
        }

    }
}
