using MediatR;
using Persistence;

namespace Application.Books
{
    public class Delete
    {
        public class Command : IRequest
        {
            public string Isbn { get; set; }
        }
       

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var book = await _context.Books.FindAsync(request.Isbn);

                _context.Remove(book);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }

    }
}
