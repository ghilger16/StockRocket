using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NHibernate;
using StockRocket.Mappings;
using StockRocket.Models;
using ISession = NHibernate.ISession;


// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StockRocket.Controllers
{
    public class BookController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            ViewBag.Message = "Your application description page.";
            IList<Book> books;

            using (ISession session = NhibernateSession.OpenSession())  // Open a session to conect to the database
            {
                books = session.Query<Book>().ToList(); //  Querying to get all the books
            }

            return View(books);
        }

        // GET: Book/Details/5
        public IActionResult Details(int id)
        {
            Book book = new Book();
            using (ISession session = NhibernateSession.OpenSession())
            {
                book = session.Query<Book>().Where(b => b.Id == id).FirstOrDefault();
            }

            return View(book);
        }

        // GET: Book/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Book/Create
        [HttpPost]
        public IActionResult Create(IFormCollection collection)
        {
            try
            {
                Book book = new Book();     //  Creating a new instance of the Book
                book.Title = collection["Title"].ToString();
                book.Genre = collection["Genre"].ToString();
                book.Author = collection["Author"].ToString();

                // TODO: Add insert logic here
                using (ISession session = NhibernateSession.OpenSession())
                {
                    using (ITransaction transaction = session.BeginTransaction())   //  Begin a transaction
                    {
                        session.Save(book); //  Save the book in session
                        transaction.Commit();   //  Commit the changes to the database
                    }
                }
                return RedirectToAction("Index");
            }
            catch (Exception e)
            {
                return View(e);
            }
        }

        // GET: Book/Edit/5
        public IActionResult Edit(int id)
        {
            Book book = new Book();
            using (ISession session = NhibernateSession.OpenSession())
            {
                book = session.Query<Book>().Where(b => b.Id == id).FirstOrDefault();
            }

            ViewBag.SubmitAction = "Save";
            return View(book);
        }

        // POST: Book/Edit/5
        [HttpPost]
        public IActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                Book book = new Book();
                book.Id = id;
                book.Title = collection["Title"].ToString();
                book.Genre = collection["Genre"].ToString();
                book.Author = collection["Author"].ToString();


                // TODO: Add insert logic here
                using (ISession session = NhibernateSession.OpenSession())
                {
                    using (ITransaction transaction = session.BeginTransaction())
                    {
                        session.SaveOrUpdate(book);
                        transaction.Commit();
                    }
                }
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Book/Delete/5
        public IActionResult Delete(int id)
        {
            // Delete the book
            Book book = new Book();
            using (ISession session = NhibernateSession.OpenSession())
            {
                book = session.Query<Book>().Where(b => b.Id == id).FirstOrDefault();
            }
            ViewBag.SubmitAction = "Confirm delete";
            return View("Edit", book);
        }

        // POST: Book/Delete/5
        [HttpPost]
        public IActionResult Delete(long id, IFormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here
                using (ISession session = NhibernateSession.OpenSession())
                {
                    Book book = session.Get<Book>(id);

                    using (ITransaction trans = session.BeginTransaction())
                    {
                        session.Delete(book);
                        trans.Commit();
                    }
                }
                return RedirectToAction("Index");
            }
            catch (Exception e)
            {
                return View(e);
            }
        }
    }
}